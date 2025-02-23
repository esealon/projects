import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./index.css";
import { Box } from "@mui/material";

// Define a reusable button component with onClick
const ReusableButton = ({
  text,
  showElementP,
  setShowElementP,
  elementP,
  elementP2,
  image,
  hoverImage,
  activeImage,
  width = "200px",
  height = "50px",
}) => {
  const [showElement = { showElementP }, setShowElement = { setShowElementP }] =
    useState(false);

  const handleClick = () => {
    setShowElement((prevShowProject) => !prevShowProject); // Toggle the state
  };

  return (
    <Box display="flex" justifyContent="center">
      <div id="mainContent">
        <Button
          onClick={handleClick}
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
          <div className="buttonName">
            {text} {/* The text displayed inside the button */}
            <br />
            {showElement ? "Hide Project" : "Show Project"}
          </div>
        </Button>
        {showElement && elementP}
        {showElement && elementP2}
      </div>
    </Box>
  );
};

export default ReusableButton;
