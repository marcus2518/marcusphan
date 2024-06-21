import React from "react";
import "./Education.css"; // Ensure to create this file to style your education component

interface EducationProps {
    school: string;
    subject: string;
    startDate: string;
    endDate: string;
    index: number;
}

const Education: React.FC<EducationProps> = ({ school, subject, startDate, endDate, index }) => {
    const alignmentClass = index % 2 === 0 ? "left" : "right";

    return (
        <div className={`education-container ${alignmentClass}`}>
            <div>
                <h3>{school}</h3>
                <p>{subject}</p>
                <p>{startDate} - {endDate}</p>
            </div>

        </div>
    );
};

export default Education;
