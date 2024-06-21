import React from "react";
import "./Responsibilities.css"; // Create this file to style your responsibilities

interface ResponsibilitiesProps {
    items: string[];
}

const Responsibilities: React.FC<ResponsibilitiesProps> = ({ items }) => {
    return (
        <div className="responsibilities-container">
            <h4>Responsibilities</h4>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Responsibilities;
