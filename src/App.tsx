// src/App.tsx
import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Skills from "./components/cv/Skills";
import Education from "./components/cv/Education";
import JobExperience from "./components/cv/JobExperience";
import { useTransition, animated } from "react-spring";
import "./App.css";

import skillsData from "./data/skills.json";
import educationData from "./data/education.json";
import jobExperiencesData from "./data/jobExperiences.json";
import contactInfoData from "./data/contactInfo.json";
import technologiesData from "./data/technologies.json";
import motivationData from "./data/motivations.json";

const pages = [
  {
    title: "Skills",
    content: <Skills skills={skillsData.skills} />,
    backgroundImage: "/programming.jpg",
  },
  {
    title: "Education",
    content: (
      <div>
        {educationData.educationItems.map((item, index) => (
          <Education
            key={index}
            school={item.school}
            subject={item.subject}
            startDate={item.startDate}
            endDate={item.endDate}
            index={index}
          />
        ))}
      </div>
    ),
    backgroundImage: "/ets_montreal_2014.jpg",
  },
  {
    title: "Experience",
    content: (
      <div>
        {jobExperiencesData.jobExperiences.map((job, index) => (
          <JobExperience
            key={index}
            title={job.title}
            company={job.company}
            startDate={job.startDate}
            endDate={job.endDate}
            responsibilities={job.responsibilities}
          />
        ))}
      </div>
    ),
    backgroundImage: "/react-node-gcp-gke.png",
  },
];

const App: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 500 },
  });

  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="content-container">
        {transitions((style, location) => (
          <animated.div style={style} className="animated-route">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route
                path="/about"
                element={
                  <About
                    technologies={technologiesData.technologies}
                    motivation={motivationData.motivation}
                  />
                }
              />
              <Route
                path="/contact"
                element={<Contact info={contactInfoData} />}
              />
              <Route
                path="/resume"
                element={<Resume style={style} pages={pages} />}
              />
            </Routes>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default App;
