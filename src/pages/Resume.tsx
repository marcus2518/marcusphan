import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "@react-spring/web";
import "./Resume.css"; // Add a CSS file for styling

interface Page {
  title: string;
  content: React.ReactNode;
}

interface ResumeProps {
  pages: Page[];
  style?: any;
}

const Resume: React.FC<ResumeProps> = ({ pages, style }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [initial, setInitial] = useState<boolean>(true);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" && currentPage > 0) {
      navigateToPage(currentPage - 1, "left");
    } else if (e.key === "ArrowRight" && currentPage < pages.length - 1) {
      navigateToPage(currentPage + 1, "right");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  useEffect(() => {
    setInitial(false);
  }, []);

  const navigateToPage = (page: number, dir: "left" | "right") => {
    if (page >= 0 && page < pages.length) {
      setDirection(dir);
      setCurrentPage(page);
    }
  };

  const transitions = useTransition(currentPage, {
    key: currentPage,
    from: initial
      ? { opacity: 1, transform: "translateX(0%)" } // No animation on initial render
      : {
          opacity: 0,
          transform: `translateX(${direction === "right" ? 100 : -100}%)`,
        },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: {
      opacity: 0,
      transform: `translateX(${direction === "right" ? -100 : 100}%)`,
    },
    config: { duration: 500 },
  });

  return (
    <animated.div className="resume-container" style={style}>
      <div
        className="arrow left"
        onClick={() => navigateToPage(currentPage - 1, "left")}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="content-wrapper">
        {transitions((style, item) => (
          <animated.div
            key={item}
            style={{ ...style, position: "absolute", top: 0 }}
            className="resume-content"
          >
            {pages[item].content}
          </animated.div>
        ))}
      </div>
      <div
        className="arrow right"
        onClick={() => navigateToPage(currentPage + 1, "right")}
      >
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
    </animated.div>
  );
};

export default Resume;
