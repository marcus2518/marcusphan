import React from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import CustomButton from "./CustomButton";
import {
  faHome,
  faUser,
  faEnvelope,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./CustomNavbar.css";

const CustomNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { icon: faHome, text: "Home", path: "/" },
    { icon: faUser, text: "About", path: "/about" },
    { icon: faFileAlt, text: "Resume", path: "/resume" },
    { icon: faEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="flex-column custom-navbar"
    >
      <Navbar.Brand href="/" className="text-center">
        <img
          src="/profilePicture.jpg" // Use the root-relative path
          width="200"
          height="200"
          className="d-inline-block align-top"
          alt="Logo"
          style={{ borderRadius: "50%" }}
        />
      </Navbar.Brand>
      <div className="d-flex flex-column align-items-center w-100">
        {buttons.map((button, index) => (
          <CustomButton
            key={index}
            icon={button.icon}
            text={button.text}
            onClick={() => navigate(button.path)}
            className={location.pathname === button.path ? "active" : ""}
            disabled={location.pathname === button.path}
          />
        ))}
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
