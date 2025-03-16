
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
      "card group p-8 h-full flex flex-col relative overflow-hidden", 
      "before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:to-transparent before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 hover:before:from-white/0 hover:before:to-accent/5",
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
