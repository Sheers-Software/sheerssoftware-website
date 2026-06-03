import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cyan' | 'magenta' | 'green' | 'gradient';
  intensity?: 'normal' | 'strong';
  hover?: boolean;
}

const GlassCard = ({
  children,
  variant = 'cyan',
  intensity = 'normal',
  hover = true,
  className = '',
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={`glass-card glass-card--${variant} glass-card--${intensity} ${
        hover ? 'glass-card--hover' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
