// src/components/Technology.tsx
import React from "react";
import "./Technology.css";

interface TechnologyProps {
  logo: string;
  description: string;
  backgroundImage: string;
}

const Technology: React.FC<TechnologyProps> = ({
  logo,
  description,
  backgroundImage,
}) => {
  return (
    <div className="technology-container">
      <div
        className="technology-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="technology-overlay" />
      <div className="technology-content">
        <img src={logo} alt="Technology logo" className="technology-logo" />
        <p className="technology-description">{description}</p>
      </div>
    </div>
  );
};

export default Technology;
