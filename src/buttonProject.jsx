import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./index.css";

// Define a reusable button component with onClick
const ReusableButton = ({
  text,
  showElementt,
  setShowElementt,
  elementt,
  image,
  hoverImage,
  activeImage,
  onClick,
  width = "200px",
  height = "50px",
  opacity = 1,
}) => {
  const [showElement = { showElementt }, setShowElement = { setShowElementt }] =
    useState(false);

  const handleClick = () => {
    setShowElement((prevShowProject) => !prevShowProject); // Toggle the state
  };

  return (
    <div>
      <Button
        onClick={handleClick} // Use the onClick function passed as a prop
        sx={{
          width: width,
          height: height,
          backgroundImage: `url(${image})`, // default image from props
          backgroundSize: "cover", // cover the button
          backgroundPosition: "center", // center the image
          opacity: 1, // set the default opacity
          transition: "all 0.3s ease-in-out", // smooth transition on hover
          "&:hover": {
            backgroundImage: `url(${hoverImage})`, // change image on hover from props
            opacity: 1, // make fully opaque on hover
          },
          "&:active": {
            backgroundImage: `url(${activeImage})`, // change image on hover from props
            opacity: 1,
          },
        }}
      >
        <div id="buttonName">
          {text} {/* The text displayed inside the button */}
          <br />
          {showElement ? "Hide Project" : "Show Project"}
        </div>
      </Button>
      {showElement && elementt}
    </div>
  );
};

export default ReusableButton;
