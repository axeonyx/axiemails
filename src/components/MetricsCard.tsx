import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  description,
  icon,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    let animationFrame: number;
    let startTime: number | undefined;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Determine the value format and generate random numbers accordingly
      let randomValue: string;
      if (value.includes('%')) {
        randomValue = Math.floor(Math.random() * 100) + '%';
      } else if (value.includes('x')) {
        randomValue = Math.floor(Math.random() * 50) + 'x';
      } else {
        randomValue = Math.floor(Math.random() * 100).toString();
      }

      setDisplayValue(randomValue);

      // Animation duration: 1.5 seconds
      if (progress < 1500) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        setIsAnimating(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value]);

  return (
    <Card
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