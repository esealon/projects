import React from 'react';
import Button from "@mui/material/Button";

// Define a reusable button component with onClick
const ReusableButton = ({ text, image, hoverImage, onClick, width = '200px', height = '50px', opacity = 0.5 }) => {
  return (
    <Button
      onClick={onClick} // Use the onClick function passed as a prop
      sx={{
        width: width,
        height: height,
        backgroundImage: `url(${image})`, // default image from props
        backgroundSize: 'cover', // cover the button
        backgroundPosition: 'center', // center the image
        opacity: opacity, // set the default opacity
        transition: 'opacity 0.3s ease-in-out', // smooth transition on hover
        '&:hover': {
          backgroundImage: `url(${hoverImage})`, // change image on hover from props
          opacity: 1, // make fully opaque on hover
        },
      }}
    >
      {text} {/* The text displayed inside the button */}
    </Button>
  );
};

export default ReusableButton;
