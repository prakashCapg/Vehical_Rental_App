// import React, { useState } from "react";
// import "./Accordion.css";

// const Accordion = ({ header, status, details, actions, children }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleAccordion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="accordion">
//       <div className="accordion-header">
//         <div className="accordion-header-title">{header}</div>
//         <div className="accordion-header-status">
//           {status}
//           <button className="accordion-toggle-button" onClick={toggleAccordion}>
//             {isExpanded ? "-" : "+"}
//           </button>
//         </div>
//       </div>
//       {isExpanded && (
//         <div className="accordion-body">
//           <div className="accordion-body-content">
//             <div className="accordion-details">{details}</div>
//             {children}
//             <div className="accordion-actions">{actions}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accordion;


import React, { useState } from "react";
import "./Accordion.css";
 
const Accordion = ({ header, status, details, actions, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
 
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
 
  return (
    <div className="accordion">
      <div className="accordion-header">
        <div className="accordion-header-title">{header}</div>
        <div className="accordion-header-status">
          {status}
          <button className="accordion-toggle-button" onClick={toggleAccordion}>
            {isExpanded ? "-" : "+"}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="accordion-body">
          <div className="accordion-body-content">
            <div className="accordion-details">{details}</div>
            {children}
            <div className="accordion-actions">{actions}</div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Accordion;