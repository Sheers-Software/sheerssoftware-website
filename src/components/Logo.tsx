"use client";

import React from "react";

interface LogoProps {
  size?: number;
  variant?: "light" | "dark" | "navy" | "white";
  showText?: boolean;
  className?: string;
  textColor?: string;
  iconColor?: string;
}

/**
 * Reusable Logo component for Nocturn AI.
 * Supports different sizes, color variants, and optional text.
 */
export const Logo = ({
  size = 32,
  variant = "navy",
  showText = true,
  className = "",
  textColor,
  iconColor,
}: LogoProps) => {
  // Determine colors based on variant if not explicitly provided
  const getIconColor = () => {
    if (iconColor) return iconColor;
    if (variant === "white" || variant === "light") return "white";
    return "var(--color-navy)";
  };

  const getTextColor = () => {
    if (textColor) return textColor;
    if (variant === "white" || variant === "light") return "white";
    return "var(--color-navy)";
  };

  const finalIconColor = getIconColor();
  const finalTextColor = getTextColor();

  return (
    <div 
      className={`logo-container ${className}`} 
      style={{ 
        display: "inline-flex", 
        alignItems: "center", 
        gap: `${size / 4}px` 
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        aria-hidden="true"
      >
        <circle 
          cx="16" 
          cy="16" 
          r="14" 
          stroke={finalIconColor} 
          strokeWidth="2.5" 
          style={{ fill: "none" }} 
        />
        <path 
          d="M16 6C10.5 6 8 12 8 16c0 4 2.5 10 8 10 -3-2-4.5-5.5-4.5-10S13 8 16 6z" 
          fill={finalIconColor} 
        />
      </svg>
      
      {showText && (
        <span 
          style={{ 
            color: finalTextColor, 
            fontSize: `${size * 0.75}px`, 
            fontWeight: 700, 
            fontFamily: "var(--font-display)", 
            textTransform: "uppercase",
            lineHeight: 1
          }}
        >
          Nocturn AI
        </span>
      )}
    </div>
  );
};
