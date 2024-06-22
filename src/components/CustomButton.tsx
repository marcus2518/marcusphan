import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomButton.css";

interface CustomButtonProps {
  icon: any;
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, text, onClick, className, disabled }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} className="custom-button-icon" />
      <span className="custom-button-text">{text}</span>
    </button>
  );
};

export default CustomButton;
