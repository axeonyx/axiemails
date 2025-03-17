import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  observerRef?: (node: HTMLElement | null) => void;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  description,
  icon,
  className,
  observerRef,
}) => {
  const [displayValue, setDisplayValue] = useState('1'); // Start at 1
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Pass the card ref to the parent observer for fade-in effect
  useEffect(() => {
    if (observerRef && cardRef.current) {
      observerRef(cardRef.current);
    }
  }, [observerRef]);

  // Animation logic triggered when card enters viewport
  useEffect(() => {
    if (!cardRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isAnimating && !hasAnimated.current) {
          setIsAnimating(true);
          let animationFrame: number;
          let startTime: number | undefined;

          // Parse the target value and unit
          const unit = value.includes('%') ? '%' : value.includes('x') ? 'x' : '';
          const targetNumber = parseFloat(value.replace(/[^0-9.]/g, ''));
          const startNumber = 1;
          const duration = 1500; // Animation duration in milliseconds

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressFraction = Math.min(progress / duration, 1);

            // Calculate the current number based on progress
            const currentNumber = Math.floor(
              startNumber + (targetNumber - startNumber) * progressFraction
            );
            const newValue = `${currentNumber}${unit}`;

            setDisplayValue(newValue);

            if (progress < duration) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setDisplayValue(value); // Ensure exact final value
              setIsAnimating(false);
              hasAnimated.current = true;
            }
          };

          animationFrame = requestAnimationFrame(animate);

          return () => {
            if (animationFrame) {
              cancelAnimationFrame(animationFrame);
            }
          };
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [value]);

  return (
    <Card
      ref={cardRef}
      className={cn(
        'border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3
              className={cn(
                'text-3xl font-bold',
                isAnimating ? 'text-muted-foreground/70' : 'text-foreground',
                'transition-colors duration-200'
              )}
            >
              {displayValue}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-2">{description}</p>
            )}
          </div>
          {icon && (
            <div className="bg-accent/10 p-3 rounded-full text-accent">{icon}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;