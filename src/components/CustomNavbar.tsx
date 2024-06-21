import React from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./CustomNavbar.css";

const CustomNavbar: React.FC = () => {
  const navigate = useNavigate();

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
        <CustomButton icon={faHome} text="Home" onClick={() => navigate("/")} />
        <CustomButton
          icon={faUser}
          text="About"
          onClick={() => navigate("/about")}
        />
        <CustomButton
          icon={faEnvelope}
          text="Contact"
          onClick={() => navigate("/contact")}
        />
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
