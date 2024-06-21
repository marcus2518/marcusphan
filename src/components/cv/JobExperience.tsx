import React from "react";
import Responsibilities from "./Responsibilities";
import "./JobExperiencs.css"; // Create this file to style your job experience component

interface JobExperienceProps {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

const JobExperience: React.FC<JobExperienceProps> = ({ title, company, startDate, endDate, responsibilities }) => {
    return (
        <div className="job-experience-container">
            <h3>{title} at {company}</h3>
            <p>{startDate} - {endDate}</p>
            <Responsibilities items={responsibilities} />
        </div>
    );
};

export default JobExperience;
