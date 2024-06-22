// src/pages/About.tsx
import React from "react";
import { useTrail, animated } from "@react-spring/web";
import "./About.css";
import Technology from "../components/Technology";

interface Technology {
  logo: string;
  description: string;
  backgroundImage: string;
}

interface AboutProps {
  technologies: Technology[];
  motivation: string;
}

const About: React.FC<AboutProps> = ({ technologies, motivation }) => {
  const items = [
    { description: motivation, center: true },
    ...technologies.map((tech) => ({ ...tech, center: false })),
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 200,
    trail: 300,
  });

  return (
    <div className="about-container">
      {trail.map((style, index) => (
        <animated.div
          key={index}
          style={style}
          className={`technology-wrapper ${
            items[index].center ? "center" : index % 2 === 0 ? "left" : "right"
          }`}
        >
          {items[index].center ? (
            <p className="motivation-text">{items[index].description}</p>
          ) : (
            <Technology
              logo={(items[index] as Technology).logo}
              description={items[index].description}
              backgroundImage={(items[index] as Technology).backgroundImage}
            />
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default About;
