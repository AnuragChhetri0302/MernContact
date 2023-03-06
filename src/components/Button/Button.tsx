import React from 'react';
import Style from './Button.module.scss';

//Interface for button component
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'round';
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

// Button components using ButtonProps as props
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    // returning button with different props for performing different functionalities
    <button
      className={`${Style[variant]} ${Style.button}`}
      {...rest}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
