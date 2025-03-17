
import React from 'react';
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
  return (
    <Card className={cn(
      "border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-3xl font-bold">{value}</h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-2">{description}</p>
            )}
          </div>
          {icon && (
            <div className="bg-accent/10 p-3 rounded-full text-accent">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
