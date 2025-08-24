  // import { Swiper, SwiperSlide } from "swiper/react";
  // import "swiper/css";
  // import "swiper/css/effect-coverflow";
  // import "swiper/css/pagination";
  // import "../Stylings/certificate.css";
  // import badge1 from '../Image/Agile.jpg';
  // import badge2 from '../Image/Deep Learning.jpg';
  // import badge3 from '../Image/SOLID.jpg';
  // import badge4 from '../Image/Story_telling.jpg';

  // const Certificate = () => {
  //   const badges = [
  //     {
  //       img: badge1,
  //       title: "Agile Methodologies",
  //       description: "Understanding agile principles and practices for effective project management."
  //     },
  //     {
  //       img: badge2,
  //       title: "Deep Learning",
  //       description: "Mastering neural networks and advanced machine learning techniques."
  //     },
  //     {
  //       img: badge3,
  //       title: "SOLID Principles",
  //       description: "Applying SOLID design principles for clean and maintainable code."
  //     },
  //     {
  //       img: badge4,
  //       title: "Storytelling with Data",
  //       description: "Crafting compelling narratives using data visualization and insights."
  //     }
  //   ];

  //   return (
  //     <div className="certiContainer">
  //       <div className="Certi_title">
  //         <p className="big" id="cer_big">Badges</p>
  //         <p className="small" id="cer_small">Badges</p>
  //       </div>
  //       <div className="Carousel">
  //         <Swiper>
  //           {badges.map((badge, i) => (
  //             <SwiperSlide key={i} style={{ width: '300px' }}>
  //               <div className="card" id="cert_card">
  //                 <img src={badge.img} className="card-img-top" alt={badge.title} />
  //                 <div className="card-body">
  //                   <h5 className="card-title">{badge.title}</h5>
  //                   <p className="card-text">{badge.description}</p>
  //                 </div>
  //               </div>
  //             </SwiperSlide>
  //           ))}
  //         </Swiper>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Certificate;


  // import { Swiper, SwiperSlide } from "swiper/react";
  // import { EffectCoverflow, Pagination } from "swiper/modules";
  // import "swiper/css";
  // import "swiper/css/effect-coverflow";
  // import "swiper/css/pagination";
  // import "../Stylings/certificate.css";

  // import badge1 from '../Image/Agile.jpg';
  // import badge2 from '../Image/Deep Learning.jpg';
  // import badge3 from '../Image/SOLID.jpg';
  // import badge4 from '../Image/Story_telling.jpg';

  // const Certificate = () => {
  //   const badges = [
  //     {
  //       img: badge1,
  //       title: "Agile Methodologies",
  //       description: "Understanding agile principles and practices for effective project management."
  //     },
  //     {
  //       img: badge2,
  //       title: "Deep Learning",
  //       description: "Mastering neural networks and advanced machine learning techniques."
  //     },
  //     {
  //       img: badge3,
  //       title: "SOLID Principles",
  //       description: "Applying SOLID design principles for clean and maintainable code."
  //     },
  //     {
  //       img: badge4,
  //       title: "Storytelling with Data",
  //       description: "Crafting compelling narratives using data visualization and insights."
  //     }
  //   ];

  //   return (
  //     <div className="certiContainer">
  //       <div className="Certi_title">
  //         <p className="big" id="cer_big">Badges</p>
  //         <p className="small" id="cer_small">Badges</p>
  //       </div>
  //       <div className="Carousel">
  //         <Swiper
  //           effect={"coverflow"}
  //           grabCursor={true}
  //           centeredSlides={true}
  //           slidesPerView={"auto"}
  //           coverflowEffect={{
  //             rotate: 50,
  //             stretch: 0,
  //             depth: 100,
  //             modifier: 1,
  //             slideShadows: true,
  //           }}
  //           pagination={true}
  //           modules={[EffectCoverflow, Pagination]}
  //           className="mySwiper"
  //         >
  //           {badges.map((badge, i) => (
  //             <SwiperSlide key={i} style={{ width: '300px' }}>
  //               <div className="card" id="cert_card">
  //                 <img src={badge.img} className="card-img-top" alt={badge.title} />
  //                 <div className="card-body">
  //                   <h5 className="card-title">{badge.title}</h5>
  //                   <p className="card-text">{badge.description}</p>
  //                 </div>
  //               </div>
  //             </SwiperSlide>
  //           ))}
  //         </Swiper>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Certificate;

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Stylings/certificate.css";

import badge1 from '../Image/Agile.jpg';
import badge2 from '../Image/Deep Learning.jpg';
import badge3 from '../Image/SOLID.jpg';
import badge4 from '../Image/Story_telling.jpg';

const Certificate = () => {
  const badges = [
    {
      img: badge1,
      title: "Agile Methodologies",
      description: "Understanding agile principles and practices for effective project management."
    },
    {
      img: badge2,
      title: "Deep Learning",
      description: "Mastering neural networks and advanced machine learning techniques."
    },
    {
      img: badge3,
      title: "SOLID Principles",
      description: "Applying SOLID design principles for clean and maintainable code."
    },
    {
      img: badge4,
      title: "Storytelling with Data",
      description: "Crafting compelling narratives using data visualization and insights."
    }
  ];

  return (
    <div className="certiContainer">
      <div className="Certi_title">
        <p className="big" id="cer_big">Badges</p>
        <p className="small" id="cer_small">Badges</p>
      </div>
      <div className="Carousel">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {badges.map((badge, i) => (
            <SwiperSlide key={i} style={{ width: '300px' }}>
              <div className="card" id="cert_card">
                <img src={badge.img} className="card-img-top" alt={badge.title} />
                <div className="card-body">
                  <h5 className="card-title">{badge.title}</h5>
                  <p className="card-text">{badge.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certificate;
