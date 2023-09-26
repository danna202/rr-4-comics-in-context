import React, { useContext } from "react";
import StylesContext from "./StylesContext"


export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  

  return (
    <div>
       <div style={{ textAlign: 'center', margin: '10px' }}></div>
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
