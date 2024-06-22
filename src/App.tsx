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
import "./App.css"; // Ensure to create and use a custom CSS file for styling

const skills = [
  "Basic knowledge in C, C++, C#, Python",
  "Basic knowledge in artificial intelligence",
  "Good understanding of object-oriented programming",
  "Good knowledge in Java, JavaScript (TypeScript)",
  "Good knowledge in web development (ReactJS, ExpressJS, Node.js, Google Cloud Platforms)",
  "Knowledge of Git",
  "Familiarity with some UML standards",
  "Bilingual (English and French)",
];

const educationItems = [
  {
    school: "École de technologie supérieure",
    subject: "Software engineering",
    startDate: "2020",
    endDate: "2024",
  },
  {
    school: "École Polytechnique de Montréal",
    subject: "Software engineering",
    startDate: "2016",
    endDate: "2018",
  },
  {
    school: "Collège de Maisonneuve",
    subject: "Computer science and mathematics",
    startDate: "2014",
    endDate: "2016",
  },
];

const jobExperiences = [
  {
    title: "Teaching Assistant (LOG430 Software Architecture)",
    company: "École de technologie supérieure",
    startDate: "May 2024",
    endDate: "",
    responsibilities: [
      "Assist students in designing a software architecture",
      "Discuss common software architecture tactics to improve system availability and performance",
      "Discuss methods to implement said tactics",
      "Containerize microservices using Docker",
      "Grade lab reports pertaining to the software architecture of a particular system",
    ],
  },
  {
    title: "Web Development Intern (front-end)",
    company: "Triton Digital",
    startDate: "January 2023",
    endDate: "September 2023",
    responsibilities: [
      "Design and implement user interfaces using ReactJS and TypeScript",
      "Cooperate with various company teams to maintain a uniform user interface across products",
      "Interact with internal APIs to meet company needs",
      "Use the ElasticSearch API to implement logging functions",
    ],
  },
  {
    title: "Teaching Assistant (GTI100 Programming)",
    company: "École de technologie supérieure",
    startDate: "June 2023",
    endDate: "August 2023",
    responsibilities: [
      "Assist students in their coding laboratories",
      "Grade assignments",
    ],
  },
  {
    title: "Web Development Intern (full-stack)",
    company: "MHICC",
    startDate: "September 2021",
    endDate: "April 2022",
    responsibilities: [
      "Propose, design, and implement user interfaces using ReactJS and TypeScript",
      "Implement backend responses to HTTP requests sent using axios library from the frontend with ExpressJS, while retrieving data from a Google Firestore database as needed",
      "Wisely define the data structures used in the Google Firestore database",
      "Implement cloud functions as needed",
      "Assist the quality assurance team in producing new documentation related to a newly developed feature, updating existing documentation, and running tests as necessary",
    ],
  },
  {
    title: "Customer Service",
    company: "TELEPERFORMANCE",
    startDate: "May 2019",
    endDate: "August 2019",
    responsibilities: ["Handle any concerns pertaining to car rentals"],
  },
];

const contactInfo = {
  name: "Marcus Phan",
  email: "marcusphan1@gmail.com",
  phone: "+1 514 589 8133",
  github: "https://github.com/marcus2518",
};

const pages = [
  {
    title: "Skills",
    content: <Skills skills={skills} />,
    backgroundImage: "/programming.jpg",
  },
  {
    title: "Education",
    content: (
      <div>
        {educationItems.map((item, index) => (
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
        {jobExperiences.map((job, index) => (
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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact info={contactInfo} />} />
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
