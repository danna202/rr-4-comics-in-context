import React, { useContext } from "react";
import StylesContext from "./StylesContext"

export default function CollectorButton() {
  const buttonStyling = useContext(StylesContext);

  // change button color on hover
  const buttonStyleWithHover = {
    ...buttonStyling,
    textAlign: "center", // Center align the text
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "blue", // Change to the desired hover color
      color: "white", // Change to the desired hover text color
    },
  };

  return (  
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <button style={buttonStyleWithHover}>
        Click Here!
      </button>
    </div>
  );

}