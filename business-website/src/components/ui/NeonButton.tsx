import React from 'react';
import './NeonButton.css';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

const NeonButton = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}: NeonButtonProps) => {
  return (
    <button
      className={`neon-button neon-button--${variant} neon-button--${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="neon-button__content">{children}</span>
      <span className="neon-button__glow"></span>
    </button>
  );
};

export default NeonButton;
