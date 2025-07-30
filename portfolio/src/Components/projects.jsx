// import React, { useState } from 'react';

// // Sample project data
// const projectData = [
//   { title: "React Portfolio", category: "frontend" },
//   { title: "React Portfolio", category: "frontend" },
//   { title: "React Portfolio", category: "frontend" },
//   { title: "Node.js API", category: "backend" },
//   { title: "Fullstack Blog", category: "fullstack" },
//   { title: "Data Dashboard", category: "data-analysis" },
//   { title: "CSS Animations", category: "frontend" },
//   { title: "Express Auth", category: "backend" },
//   { title: "MERN Stack App", category: "fullstack" },
//   { title: "Python Analysis", category: "data-analysis" },
//   { title: "HTML Landing Page", category: "frontend" },
// ];

// const categories = ["frontend", "backend", "fullstack", "data-analysis"];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("frontend");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//   // Filter projects by selected category
//   const filteredProjects = projectData.filter(
//     (project) => project.category === selectedCategory
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedProjects = filteredProjects.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav style={{ marginBottom: "20px" }}>
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleCategoryChange(cat)}
//             style={{
//               marginRight: "10px",
//               padding: "10px",
//               backgroundColor: selectedCategory === cat ? "#3498db" : "#eee",
//               color: selectedCategory === cat ? "#fff" : "#000",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             {cat.toUpperCase()}
//           </button>
//         ))}
//       </nav>

//       {/* Project Cards */}
//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {paginatedProjects.map((project, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ccc",
//               padding: "20px",
//               borderRadius: "10px",
//               width: "30%",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h3>{project.title}</h3>
//             <p>Category: {project.category}</p>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           style={{ marginRight: "10px" }}
//         >
//           Previous
//         </button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           style={{ marginLeft: "10px" }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;
    

import React, { useState } from 'react';
import "../Stylings/project.css";   
const projectData = [
  {
    title: "React Portfolio",
    category: "frontend",
    description: "A personal portfolio built with React.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "React Portfolio",
    category: "frontend",
    description: "A personal portfolio built with React.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "React Portfolio",
    category: "frontend",
    description: "A personal portfolio built with React.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "React Portfolio",
    category: "frontend",
    description: "A personal portfolio built with React.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Node.js API",
    category: "backend",
    description: "RESTful API using Node.js and Express.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Fullstack Blog",
    category: "fullstack",
    description: "A blog platform using MERN stack.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Data Dashboard",
    category: "data-analysis",
    description: "Interactive dashboard for data visualization.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "CSS Animations",
    category: "frontend",
    description: "Creative animations using pure CSS.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Express Auth",
    category: "backend",
    description: "Authentication system with JWT.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "MERN Stack App",
    category: "fullstack",
    description: "A full-featured MERN stack application.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Python Analysis",
    category: "data-analysis",
    description: "Data analysis using Python and Pandas.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "HTML Landing Page",
    category: "frontend",
    description: "Responsive landing page using HTML/CSS.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
];

const categories = ["frontend", "backend", "fullstack", "data-analysis"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="project_container mt-4">
        <div className="project_header">
            <p className="big" id="project_big">Deliverables</p>
            <p className="small" id="project_small">Deliverables</p>
        </div>

      {/* Bootstrap-style Navbar */}
      <ul className="nav justify-content-center mb-4" id='pro_nav'>
        {categories.map((cat) => (
          <li  className="nav-item" key={cat}>
            <a
              href="#"
              id='pro_link'
              className={`nav-link ${selectedCategory === cat ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryChange(cat);
              }}
            >
              {cat.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

      {/* Cards */}
      <div className="row" id='project_cards'>
        {paginatedProjects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: '100%' }}>
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap-style Pagination */}
      <nav aria-label="Page navigation example">
        <ul id='lin' className="pagination justify-content-center">
          <li  className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
              key={i}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(i + 1);
                }}
              >
                {i + 1}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Projects;
