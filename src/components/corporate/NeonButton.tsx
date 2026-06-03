import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'sm' | 'md' | 'lg'; // Supported classes: neon-button--primary, neon-button--secondary, neon-button--ghost
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
  // Map variant and size safely
  const variantClass = `neon-button--${variant}`;
  const sizeClass = `neon-button--${size}`;

  return (
    <button
      className={`neon-button ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="neon-button__content">{children}</span>
      <span className="neon-button__glow"></span>
    </button>
  );
};

export default NeonButton;
