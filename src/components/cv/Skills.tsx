import React from "react";
import { useTrail, animated } from "@react-spring/web";
import "./Skills.css";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const trail = useTrail(skills.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 200,
  });

  return (
    <div className="skills-container">
      <h3>Skills</h3>
      <ul>
        {trail.map((style, index) => (
          <animated.li key={index} style={style} className="skill-item">
            <span className="bullet-point">•</span> {skills[index]}
          </animated.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
