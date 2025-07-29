// import React, { useState } from "react";
// import "../Stylings/experience.css";

// const Experience = () => {
//   const [selectedOption, setSelectedOption] = useState("education");

//   return (
//     <div className="experience_container">
//       <div className="experi_title">
//         <p className="big" id="experi_big">Milestones</p>
//         <p className="small" id="experi_small">Milestones</p>
//       </div>

//       {/* Toggle Buttons */}
//       {/* <div className="toggle-buttons" style={{ marginBottom: "20px" }}>
//         <button
//           className={selectedOption === "education" ? "active" : ""}
//           onClick={() => setSelectedOption("education")}
//           id="education-button"
//         >
//           Education
//         </button>
//         <button
//           className={selectedOption === "experience" ? "active" : ""}
//           onClick={() => setSelectedOption("experience")}
//           id="experience-button"
//         >
//           Experience
//         </button>
//       </div> */}
//       <div className="toggle-switch">
//   <input
//     type="checkbox"
//     id="switch"
//     checked={selectedOption === "experience"}
//     onChange={() =>
//       setSelectedOption(selectedOption === "education" ? "experience" : "education")
//     }
//   />
//   <label htmlFor="switch">
//     <span className="switch-label education">Education</span>
//     <span className="switch-slider"></span>
//     <span className="switch-label experience">Experience</span>
//   </label>
// </div>


//       <div className="row">
//         <div className="col-4">
//           <div id="list-example" className="list-group">
//             {/* <a className="list-group-item" href="#list-item-1"></a> */}
//             <a className="list-group-item" href="#list-item-1">Bachelor's Degree</a>
//             <a className="list-group-item" href="#list-item-2">Higher Secondary</a>
//             <a className="list-group-item" href="#list-item-3">High School</a>
//           </div>
//         </div>

//         <div className="col-8">
//           <div
//             data-bs-spy="scroll"
//             data-bs-target="#list-example"
//             data-bs-smooth-scroll="true"
//             className="scrollspy-example"
//             tabIndex="0"
//             style={{ position: 'relative', height: '260px', overflow: 'auto' }}
//           >
//             {selectedOption === "education" ? (
//               <>
//                 <h4 id="list-item-1">Bachelor's Degree</h4>
//                 <p><span className="sideHeading">Institution Name:</span> Sri Krishna College of Technology</p>
//                 <p><span className="sideHeading">Graduation Year:</span> 2023</p>
//                 <p><span className="sideHeading">Specialization:</span> Computer Science </p>
//                 <p><span className="sideHeading">Percentage:</span> 70% </p>
//                 {/* <p><span className="sideHeading">Achievements:</span> Completed with a focus on  </p>                 */}
//                 <h4 id="list-item-2">Higher Scondary</h4>
//                 <p><span className="sideHeading">Institution Name:</span> SVGV Matriculation Higher Secondary School.</p>
//                 <p><span className="sideHeading">Graduation Year:</span> 2019</p>
//                 <p><span className="sideHeading">Percentage:</span> 77% </p>
//                 <p><span className="sideHeading">Achievements:</span> Completed with a focus on Science and Mathematics.</p>
//                 <h4 id="list-item-3">High School</h4>
//                 <p><span className="sideHeading">Institution Name:</span> Sri RamaKrishna Matriculation Higher Secondary School.</p>
//                 <p><span className="sideHeading">Graduation Year:</span> 2017</p>
//                 <p><span className="sideHeading">Percentage:</span> 96% </p>
//                 <p><span className="sideHeading">Achievements:</span> Consistently maintained a top 5 class rank throughout the academic year.</p>
//                 {/* <h4 id="list-item-4">Workshops</h4>
//                 <p>Attended various tech workshops and hackathons.</p> */}
//               </>
//             ) : (
//               <>
//                 <h4 id="list-item-1">Internship</h4>
//                 <p>Software Development Intern at DEF Corp.</p>
//                 <h4 id="list-item-2">First Job</h4>
//                 <p>Junior Developer at GHI Ltd., worked on frontend technologies.</p>
//                 <h4 id="list-item-3">Current Role</h4>
//                 <p>Analyst at your current company, focusing on data-driven solutions.</p>
//                 <h4 id="list-item-4">Projects</h4>
//                 <p>Led multiple internal tools and automation projects.</p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


// import { useState } from "react";
// import "../Stylings/experience.css";

// const Experience = () => {
//   const [selectedOption, setSelectedOption] = useState("education");

//   return (
//     <div className="experience_container">
//       <div className="experi_title">
//         <p className="big" id="experi_big">Milestones</p>
//         <p className="small" id="experi_small">Milestones</p>
//       </div>

//       {/* Rounded Toggle Switch */}
//       <div className="toggle-switch">
//         <input
//           type="checkbox"
//           id="switch"
//           checked={selectedOption === "experience"}
//           onChange={() =>
//             setSelectedOption(selectedOption === "education" ? "experience" : "education")
//           }
//         />
//         <label htmlFor="switch">
//           <span className="switch-label education">Education</span>
//           <span className="switch-slider"></span>
//           <span className="switch-label experience">Experience</span>
//         </label>
//       </div>

//       {/* Education Section */}
//       {selectedOption === "education" ? (
//         <div className="row education-row">
//           <div className="col-4">
//             <div id="list-example" className="list-group">
//               <a className="list-group-item" href="#list-item-1">Bachelor's Degree</a>
//               <a className="list-group-item" href="#list-item-2">Higher Secondary</a>
//               <a className="list-group-item" href="#list-item-3">High School</a>
//             </div>
//           </div>

//           <div className="col-8">
//             <div
//               data-bs-spy="scroll"
//               data-bs-target="#list-example"
//               data-bs-smooth-scroll="true"
//               className="scrollspy-example"
//               tabIndex="0"
//               style={{ position: 'relative', height: '260px', overflow: 'auto' }}
//             >
//               <h4 id="list-item-1">Bachelor's Degree</h4>
//               <p><span className="sideHeading">Institution Name:</span> Sri Krishna College of Technology</p>
//               <p><span className="sideHeading">Graduation Year:</span> 2023</p>
//               <p><span className="sideHeading">Specialization:</span> Computer Science</p>
//               <p><span className="sideHeading">Percentage:</span> 70%</p>

//               <h4 id="list-item-2">Higher Secondary</h4>
//               <p><span className="sideHeading">Institution Name:</span> SVGV Matriculation Higher Secondary School</p>
//               <p><span className="sideHeading">Graduation Year:</span> 2019</p>
//               <p><span className="sideHeading">Percentage:</span> 77%</p>
//               <p><span className="sideHeading">Achievements:</span> Focus on Science and Mathematics</p>

//               <h4 id="list-item-3">High School</h4>
//               <p><span className="sideHeading">Institution Name:</span> Sri RamaKrishna Matriculation Higher Secondary School</p>
//               <p><span className="sideHeading">Graduation Year:</span> 2017</p>
//               <p><span className="sideHeading">Percentage:</span> 96%</p>
//               <p><span className="sideHeading">Achievements:</span> Top 5 class rank throughout the year</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="row experience-row">
//           <div className="col-4">
//             <div id="list-example" className="list-group">
//               <a className="list-group-item" href="#list-item-4">Software Developer</a>
//               <a className="list-group-item" href="#list-item-5">Technical Support Executive</a>
//               <a className="list-group-item" href="#list-item-6">Data Scientist</a>
//               <a className="list-group-item" href="#list-item-7">Mobile App Developer Intern</a>
//             </div>
//           </div>

//           <div className="col-8">
//             <div
//               data-bs-spy="scroll"
//               data-bs-target="#list-example"
//               data-bs-smooth-scroll="true"
//               className="scrollspy-example"
//               tabIndex="0"
//               style={{ position: 'relative', height: '260px', overflow: 'auto' }}
//             >
//               <h4 id="list-item-4">Software Developer</h4>
//               <p><span className="sideHeading">Company Name: </span>Capgemini </p>
//               <p><span className="sideHeading">Employment Period: </span>25/10/2024 - Current </p>
//               <p><span className="sideHeading">Tools & Technologies Used: </span> </p>
//               <h4 id="list-item-5">Technical Support Executive</h4>
//               <p><span className="sideHeading">Company Name: </span>Betsol </p>
//               <p><span className="sideHeading">Employment Period: </span>01/06/2024 - 20/10/2025 </p>
//               <p><span className="sideHeading">Tools & Technologies Used: </span> </p>
//               <h4 id="list-item-6">Data Scientist</h4>
//               <p><span className="sideHeading">Company Name: </span> </p>
//               <p><span className="sideHeading">Employment Period: </span> </p>
//               <p><span className="sideHeading">Tools & Technologies Used: </span> </p>
//               <h4 id="list-item-7">Mobile App Developer Intern</h4>
//               <p><span className="sideHeading">Company Name: </span> </p>
//               <p><span className="sideHeading">Employment Period: </span> </p>
//               <p><span className="sideHeading">Tools & Technologies Used: </span> </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Experience;


import { useState, useEffect } from "react";
import "../Stylings/experience.css";

const Experience = () => {
  const [selectedOption, setSelectedOption] = useState("education");


useEffect(() => {
  if (selectedOption === "experience") {
    const interval = setInterval(() => {
      const scrollElement = document.querySelector(".scrollspy-example");
      const targetElement = document.querySelector("#experience-list");

      if (scrollElement && targetElement && window.bootstrap) {
        clearInterval(interval); // Stop checking once elements are found

        // Dispose existing instance if any
        const existingInstance = window.bootstrap.ScrollSpy.getInstance(scrollElement);
        if (existingInstance) {
          existingInstance.dispose();
        }

        // Initialize ScrollSpy
        new window.bootstrap.ScrollSpy(scrollElement, {
          target: "#experience-list",
          smoothScroll: true,
        });
      }
    }, 100); // Check every 100ms

    return () => clearInterval(interval); // Cleanup on unmount
  }
}, [selectedOption]);
useEffect(() => {
  if (selectedOption === "education") {
    const interval = setInterval(() => {
      const scrollElement = document.querySelector(".scrollspy-example");
      const targetElement = document.querySelector("#list-example");

      if (scrollElement && targetElement && window.bootstrap) {
        clearInterval(interval); // Stop checking once elements are found

        // Dispose existing instance if any
        const existingInstance = window.bootstrap.ScrollSpy.getInstance(scrollElement);
        if (existingInstance) {
          existingInstance.dispose();
        }

        // Initialize ScrollSpy
        new window.bootstrap.ScrollSpy(scrollElement, {
          target: "#list-example",
          smoothScroll: true,
        });
      }
    }, 100); // Check every 100ms

    return () => clearInterval(interval); // Cleanup on unmount
  }
}, [selectedOption]);


  return (
    <div className="experience_container">
      <div className="experi_title">
        <p className="big" id="experi_big">Milestones</p>
        <p className="small" id="experi_small">Milestones</p>
      </div>

      {/* Rounded Toggle Switch */}
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="switch"
          checked={selectedOption === "experience"}
          onChange={() =>
            setSelectedOption(selectedOption === "education" ? "experience" : "education")
          }
        />
        <label htmlFor="switch">
          <span className="switch-label education">Education</span>
          <span className="switch-slider"></span>
          <span className="switch-label experience">Experience</span>
        </label>
      </div>

      {/* Education Section */}
      {selectedOption === "education" ? (
        <div className="row education-row">
          <div className="col-4 edu-col">
            <div id="list-example" className="list-group">
              <a className="list-group-item" href="#list-item-1">Bachelor's Degree</a>
              <a className="list-group-item" href="#list-item-2">Higher Secondary</a>
              <a className="list-group-item" href="#list-item-3">High School</a>
            </div>
          </div>

          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              data-bs-offset="0"
              className="scrollspy-example"
              id="education-list"
              tabIndex="0"
              style={{ position: 'relative', height: '260px', overflow: 'auto' }}
            >
              <h4 id="list-item-1">Bachelor's Degree</h4>
              <p><span className="sideHeading">Institution Name:</span> Sri Krishna College of Technology</p>
              <p><span className="sideHeading">Graduation Year:</span> 2023</p>
              <p><span className="sideHeading">Specialization:</span> Computer Science</p>
              <p><span className="sideHeading">Percentage:</span> 70%</p>

              <h4 id="list-item-2">Higher Secondary</h4>
              <p><span className="sideHeading">Institution Name:</span> SVGV Matriculation Higher Secondary School</p>
              <p><span className="sideHeading">Graduation Year:</span> 2019</p>
              <p><span className="sideHeading">Percentage:</span> 77%</p>
              <p><span className="sideHeading">Achievements:</span> Focus on Science and Mathematics</p>

              <h4 id="list-item-3">High School</h4>
              <p><span className="sideHeading">Institution Name:</span> Sri RamaKrishna Matriculation Higher Secondary School</p>
              <p><span className="sideHeading">Graduation Year:</span> 2017</p>
              <p><span className="sideHeading">Percentage:</span> 96%</p>
              <p><span className="sideHeading">Achievements:</span> Top 5 class rank throughout the year</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row experience-row">
          <div className="col-4 exp-col">
            <div id="experience-list" className="list-group">
              <a className="list-group-item" href="#list-item-4" id="Exp-list-group-item1">Software Developer</a>
              <a className="list-group-item" href="#list-item-5" id="Exp-list-group-item2">Technical Support Executive</a>
              <a className="list-group-item" href="#list-item-6" id="Exp-list-group-item3">Data Scientist</a>
              <a className="list-group-item" href="#list-item-7" id="Exp-list-group-item4">Mobile App Developer Intern</a>
            </div>
          </div>

          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#experience-list"
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabIndex="0"
              id="experience-list"
              data-bs-offset="0"
              style={{ position: 'relative', height: '260px', overflow: 'auto' }}
            >
              <h4 id="list-item-4">Software Developer</h4>
              <p><span className="sideHeading">Company Name: </span>Capgemini</p>
              <p><span className="sideHeading">Employment Period: </span>25/10/2024 - Current</p>
              <p><span className="sideHeading">Tools & Technologies Used: </span></p>

              <h4 id="list-item-5">Technical Support Executive</h4>
              <p><span className="sideHeading">Company Name: </span>Betsol</p>
              <p><span className="sideHeading">Employment Period: </span>01/06/2024 - 20/10/2025</p>
              <p><span className="sideHeading">Tools & Technologies Used: </span></p>

              <h4 id="list-item-6">Data Scientist</h4>
              <p><span className="sideHeading">Company Name: </span></p>
              <p><span className="sideHeading">Employment Period: </span></p>
              <p><span className="sideHeading">Tools & Technologies Used: </span></p>

              <h4 id="list-item-7">Mobile App Developer Intern</h4>
              <p><span className="sideHeading">Company Name: </span></p>
              <p><span className="sideHeading">Employment Period: </span></p>
              <p><span className="sideHeading">Tools & Technologies Used: </span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
