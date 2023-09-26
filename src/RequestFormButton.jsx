import React, { useContext } from "react";
import StylesContext from "./StylesContext"

const styles = {  
  background: "blue",
  display: "inline-block",
  width: 120,
  height: 55,
  fontSize: 18,
  letterSpacing: 1,
  border: "2px solid black",
  borderRadius: 15
};

export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  

  return (
    <div>
       <div style={{ textAlign: 'left', margin: '40px' }}></div>
      <input style={buttonStyling} type="submit" value="Submit" />

    </div>
  );
}
return (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <button style={buttonStyleWithHover}>
      Click Here!
    </button>
  </div>
);
