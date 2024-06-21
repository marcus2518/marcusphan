import React from "react";
import "./Skills.css";

interface SkillsProps {
    skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div className="skills-container">
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
