
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  className 
}) => {
  return (
    <div className={cn(
      "card group p-8 h-full flex flex-col", 
      className
    )}>
      <div className="mb-6 text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
