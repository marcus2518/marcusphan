import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Resume.css'; // Add a CSS file for styling;
import { animated } from '@react-spring/web';

const Resume: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    { title: "Page 1 Title", content: "Page 1 Content" },
    { title: "Page 2 Title", content: "Page 2 Content" },
    { title: "Page 3 Title", content: "Page 3 Content" }
  ]; // Add your resume content here

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (e.key === "ArrowRight" && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="resume-container">
      <div className="arrow left" onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="content-wrapper">
        <div className="resume-content active">
          {pages[currentPage].content}
        </div>
      </div>
      <div className="arrow right" onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="page-footer">
        <div className="page-title">{pages[currentPage].title}</div>
        <div className="page-indicators">
          {pages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentPage ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
