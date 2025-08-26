// import React, { useState } from 'react';
// import "../Stylings/project.css";
// import back from "../Image/backend2_imresizer.jpg";
// import front from "../Image/frontend2.jpg";
// import data from "../Image/Data-Analyst-Course_imresizer.jpg";
// import full from "../Image/fullstack_imresizer.jpg";
// const projectData = [
//   {
//     title: "Professional Portfolio",
//     category: "frontend",
//     description: "A sleek personal portfolio website built with React to showcase projects and enable direct contact via EmailJS.",
//     image: front,
//     link: "https://github.com/Nithish1121/Professional_Portfolio.git"
//   },
//   {
//     title: "Restaurant Website",
//     category: "frontend",
//     description: "A stylish and responsive restaurant website built using HTML and CSS, showcasing menu items, and essential contact details.",
//     image: front,
//     link: "https://github.com/Nithish1121/Guvi_Website_Clone.git"
//   },
//   {
//     title: "Guvi Clone",
//     category: "frontend",
//     description: "A front-end clone of the GUVI website built using React with Type Script, replicating its UI and UX elements for practice.",
//     image: front,
//     link: "https://github.com/Nithish1121/Restaurant_Wesite.git"
//   },
//   {
//     title: "Nike Website",
//     category: "frontend",
//     description: "Nike website clone built with React, featuring sleek design and responsive layout.",
//     image: front,
//     link: "https://github.com/Nithish1121/Nike_Website_Sample.git"
//   },
//   {
//     title: "Node.js API",
//     category: "backend",
//     description: "RESTful API using Node.js and Express.",
//     image: back,
//     link: "#"
//   },
//   {
//     title: "Fullstack Blog",
//     category: "fullstack",
//     description: "A blog platform using MERN stack.",
//     image: full,
//     link: "#"
//   },
//   {
//     title: "Data Dashboard",
//     category: "data-analysis",
//     description: "Interactive dashboard for data visualization.",
//     image:data,
//     link: "#"
//   },
//   {
//     title: "CSS Animations",
//     category: "frontend",
//     description: "Creative animations using pure CSS.",
//     image: front,
//     link: "#"
//   },
//   {
//     title: "Express Auth",
//     category: "backend",
//     description: "Authentication system with JWT.",
//     image: back,
//     link: "#"
//   },
//   {
//     title: "MERN Stack App",
//     category: "fullstack",
//     description: "A full-featured MERN stack application.",
//     image: full,
//     link: "#"
//   },
//   {
//     title: "Python Analysis",
//     category: "data-analysis",
//     description: "Data analysis using Python and Pandas.",
//     image: data,
//     link: "#"
//   },
//   {
//     title: "HTML Landing Page",
//     category: "frontend",
//     description: "Responsive landing page using HTML/CSS.",
//     image: front,
//     link: "#"
//   },
// ];

// const categories = ["frontend", "backend", "fullstack", "data-analysis"];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("frontend");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//   const filteredProjects = projectData.filter(
//     (project) => project.category === selectedCategory
//   );

//   const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedProjects = filteredProjects.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="project_container mt-4">
//       <div className="project_header">
//         <p className="big" id="project_big">Deliverables</p>
//         <p className="small" id="project_small">Deliverables</p>
//       </div>

//       <ul className="nav justify-content-center mb-4" id='pro_nav'>
//         {categories.map((cat) => (
//           <li className="nav-item" key={cat}>
//             <a
//               href="#"
//               id='pro_link'
//               className={`nav-link ${selectedCategory === cat ? 'active' : ''}`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleCategoryChange(cat);
//               }}
//             >
//               {cat.toUpperCase()}
//             </a>
//           </li>
//         ))}
//       </ul>

//       <div className="row" id='project_cards'>
//         {paginatedProjects.map((project, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card" id='individual_cards' style={{ width: '100%' }}>
//               <img src={project.image} className="card-img-top" alt={project.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{project.title}</h5>
//                 <p className="card-text">{project.description}</p>
//                 <a href={project.link} className="btn btn-primary">Git Hub</a>
//               </div>
//             </div>
//           </div>
//         ))}

//         <nav aria-label="Page navigation example" className="w-100 d-flex justify-content-center mt-3">
//           <ul id='lin' className="pagination">
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <a
//                 className="page-link"
//                 href="#"
//                 aria-label="Previous"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setCurrentPage((prev) => Math.max(prev - 1, 1));
//                 }}
//               >
//                 <span aria-hidden="true">&laquo;</span>
//               </a>
//             </li>
//             {Array.from({ length: totalPages }, (_, i) => (
//               <li
//                 className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
//                 key={i}
//               >
//                 <a
//                   className="page-link"
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setCurrentPage(i + 1);
//                   }}
//                 >
//                   {i + 1}
//                 </a>
//               </li>
//             ))}
//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <a
//                 className="page-link"
//                 href="#"
//                 aria-label="Next"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//                 }}
//               >
//                 <span aria-hidden="true">&raquo;</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCube, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';
// import "../Stylings/project.css";

// import back from "../Image/backend2_imresizer.jpg";
// import front from "../Image/frontend2.jpg";
// import data from "../Image/Data-Analyst-Course_imresizer.jpg";
// import full from "../Image/fullstack_imresizer.jpg";

// const projectData = [
//   { title: "React Portfolio", category: "frontend", description: "A personal portfolio built with React.", image: front, link: "#" },
//   { title: "Node.js API", category: "backend", description: "RESTful API using Node.js and Express.", image: back, link: "#" },
//   { title: "Fullstack Blog", category: "fullstack", description: "A blog platform using MERN stack.", image: full, link: "#" },
//   { title: "Data Dashboard", category: "data-analysis", description: "Interactive dashboard for data visualization.", image: data, link: "#" },
//   { title: "CSS Animations", category: "frontend", description: "Creative animations using pure CSS.", image: front, link: "#" },
//   { title: "Express Auth", category: "backend", description: "Authentication system with JWT.", image: back, link: "#" },
//   { title: "MERN Stack App", category: "fullstack", description: "A full-featured MERN stack application.", image: full, link: "#" },
//   { title: "Python Analysis", category: "data-analysis", description: "Data analysis using Python and Pandas.", image: data, link: "#" },
//   { title: "HTML Landing Page", category: "frontend", description: "Responsive landing page using HTML/CSS.", image: front, link: "#" },
// ];

// const categories = ["frontend", "backend", "fullstack", "data-analysis"];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("frontend");

//   const filteredProjects = projectData.filter(
//     (project) => project.category === selectedCategory
//   );

//   return (
//     <div className="project_container mt-4">
//       <div className="project_header">
//         <p className="big" id="project_big">Deliverables</p>
//         <p className="small" id="project_small">Deliverables</p>
//       </div>

//       {/* Category Navbar */}
//       <ul className="nav justify-content-center mb-4" id='pro_nav'>
//         {categories.map((cat) => (
//           <li className="nav-item" key={cat}>
//             <a
//               href="#"
//               id='pro_link'
//               className={`nav-link ${selectedCategory === cat ? 'active' : ''}`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setSelectedCategory(cat);
//               }}
//             >
//               {cat.toUpperCase()}
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Swiper Cube Effect */}
//       <Swiper
//         effect="cube"
//         grabCursor={true}
//         cubeEffect={{
//           shadow: true,
//           slideShadows: true,
//           shadowOffset: 20,
//           shadowScale: 0.94,
//         }}
//         pagination={true}
//         modules={[EffectCube, Pagination]}
//         className="mySwiper"
//       >
//         {filteredProjects.map((project, index) => (
//           <SwiperSlide key={index}>
//             <div className="card cube-card">
//               <img src={project.image} className="card-img-top" alt={project.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{project.title}</h5>
//                 <p className="card-text">{project.description}</p>
//                 <a href={project.link} className="btn btn-primary">Git Hub</a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Projects;


import React, { useState } from 'react';
import "../Stylings/project.css";
import back from "../Image/backend2_imresizer.jpg";
import front from "../Image/frontend2.jpg";
import data from "../Image/Data-Analyst-Course_imresizer.jpg";
import full from "../Image/fullstack_imresizer.jpg";

const projectData = [
  {
    title: "Professional Portfolio",
    category: "frontend",
    description: "A sleek personal portfolio website built with React to showcase projects and enable direct contact via EmailJS.",
    image: front,
    link: "https://github.com/Nithish1121/Professional_Portfolio.git"
  },
  {
    title: "Restaurant Website",
    category: "frontend",
    description: "A stylish and responsive restaurant website built using HTML and CSS, showcasing menu items, and essential contact details.",
    image: front,
    link: "https://github.com/Nithish1121/Guvi_Website_Clone.git"
  },
  {
    title: "Guvi Clone",
    category: "frontend",
    description: "A front-end clone of the GUVI website built using React with Type Script, replicating its UI and UX elements for practice.",
    image: front,
    link: "https://github.com/Nithish1121/Restaurant_Wesite.git"
  },
  {
    title: "Nike Website",
    category: "frontend",
    description: "Nike website clone built with React, featuring sleek design and responsive layout.",
    image: front,
    link: "https://github.com/Nithish1121/Nike_Website_Sample.git"
  },
  {
    title: "Node.js API",
    category: "backend",
    description: "RESTful API using Node.js and Express.",
    image: back,
    link: "#"
  },
  {
    title: "Fullstack Blog",
    category: "fullstack",
    description: "A blog platform using MERN stack.",
    image: full,
    link: "#"
  },
  {
    title: "Data Dashboard",
    category: "data-analytics",
    description: "Interactive dashboard for data visualization.",
    image: data,
    link: "#"
  },
  {
    title: "Express Auth",
    category: "backend",
    description: "Authentication system with JWT.",
    image: back,
    link: "#"
  },
  {
    title: "MERN Stack App",
    category: "fullstack",
    description: "A full-featured MERN stack application.",
    image: full,
    link: "#"
  }
];

const categories = ["frontend", "backend", "fullstack", "data-analytics"];

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
    <div className="project_container">
      <div className="project_header">
        <p className="big" id="project_big">Deliverables</p>
        <p className="small" id="project_small">Deliverables</p>
      </div>

      <ul className="nav justify-content-center mb-4" id="pro_nav">
        {categories.map((cat) => (
          <li className="nav-item" key={cat}>
            <a
              href="#"
              id="pro_link"
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

      <div className="project_cards">
        {paginatedProjects.map((project, index) => (
          <div className="card_wrapper" key={index}>
            <div className="card" id="individual_cards">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary" id="pro_button"target="_blank" rel="noopener noreferrer">Git Hub</a>
              </div>
            </div>
          </div>
        ))}

        <nav className="pagination_nav">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
              >
                &laquo;
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
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                }}
              >
                &raquo;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Projects;

