// import React, { useContext } from "react";
// import RequestFormButton from './RequestFormButton'

// export default function SubmitForm() {
//   return (
//     <div style={{display: "flex"}}>
//       <form style={{display: "inline-block"}}>
//         <label>
//           Name of Comic:
//           <input type="text" />
//         </label>
//         <label>
//           Year of Release:
//           <input type="text" />
//         </label>
//         <label>
//           Your Email:
//           <input type="text" />
//         </label>

//         <RequestFormButton />
      
//       </form> 
//     </div>
//   );
// }
import React from "react";

export default function SubmitForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted!");
  };

  return (
    <div style={{ marginTop: "60px", textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Special Request:
          <textarea rows="60" cols="100" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
