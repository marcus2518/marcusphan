// src/pages/Home.tsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Home.css";
import homeData from "../data/home.json";

const Home: React.FC = () => {
  const { welcomeMessage, backgroundImage } = homeData;

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 200,
  });

  return (
    <div className="home-container">
      <div className="welcome-section">
        <animated.div style={fadeIn} className="welcome-message">
          {welcomeMessage}
        </animated.div>
      </div>
      <div
        className="image-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="image-gradient" />
      </div>
    </div>
  );
};

export default Home;
