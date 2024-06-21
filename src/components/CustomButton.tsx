import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomButton.css";

interface CustomButtonProps {
  icon: any;
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="custom-button-icon" />
      <span className="custom-button-text">{text}</span>
    </button>
  );
};

export default CustomButton;
