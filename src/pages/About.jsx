import React, { useState } from 'react';
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import Marquee from 'react-fast-marquee';
import MyBadges from '../pages/MyBadges';
import devOpsImage from '../assets/images/devops.png';  // Adjust the path according to your project structure
import { motion } from 'framer-motion';


const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="max-container px-4 sm:px-8 lg:px-16 py-8">
      <h1 className="head-text text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Abhishek</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 text-center">
        <p className="text-lg sm:text-xl">Harvard Certified Software Engineer</p>
      </div>

      {/* Skills Section */}
      {/* <div className="mt-16 flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="block-container w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div> */}

              {/* Skills Section */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* DevOps Tool Stack Section */}
        <div className="py-16 px-4">
  <h3 className="text-center text-2xl sm:text-3xl font-semibold subhead-text mb-10">
    My DevOps Tool Stack
  </h3>

  <div className="flex justify-center">
    <motion.div
      className="relative w-full max-w-[900px] rounded-3xl p-1 bg-gradient-to-r from-p via-black to-purple-700 shadow-2xl"
      whileHover={{
        scale: 1.12,
        rotateZ: 1,
        rotateX: 8,
        rotateY: -8,
      }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {/* Glass container with thinner black border */}
      <div className="relative rounded-3xl bg-black border-[2px] border-neutral-900 p-2 sm:p-4 backdrop-blur-md">
        <img
          src={devOpsImage}
          alt="DevOps Tools"
          className="w-full h-full object-contain rounded-2xl shadow-xl"
        />
      </div>
    </motion.div>
  </div>
</div>



      
      {/* Work Experience Section */}
      <div className="py-16">
        <h3 className="subhead-text text-center text-2xl sm:text-3xl font-semibold">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500 text-center">
          <p className="text-lg sm:text-xl">I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:</p>
        </div>

        <div className="mt-12 flex justify-center">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                  <p className="text-black-500 font-medium">{experience.company_name}</p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Certificates Section with Marquee Fix */}
      <div className="py-10">
        <h3 className="subhead-text text-center text-2xl sm:text-3xl font-semibold">My Certificates</h3>

        <div className="mt-10 overflow-hidden relative">
          <Marquee pauseOnHover speed={50} gradient={true} gradientColor={[245, 245, 245]} gradientWidth={50} className="px-2 sm:px-6">
            {[
              { key: "CS50x", src: "/certificates/CS50x2.png", title: "Harvard CS50 Certificate" },
              { key: "AWS", src: "/certificates/Openshift.png", title: "Red Hat Openshift Administrator (DO280)" },
              { key: "ReactNanodegree", src: "/certificates/RHCSA.png", title: "Red Hat Certified System Administrator" },
              { key: "Imperial", src: "/certificates/Imperial.png", title: "Imperial College London Creative Thinking Certificate" },
              { key: "Networking", src: "/certificates/Networking.png", title: "Introduction to Networking by NVIDIA" },
              { key: "Docker", src: "/certificates/Docker.png", title: "Docker Essentials by IBM" },
              { key: "Kubernetes", src: "/certificates/Kubernetes.png", title: "Container and Kubernetes Essentials by IBM" },
              { key: "Open", src: "/certificates/Open Source.png", title: "Open Source Foundations by IBM" },
              { key: "Goldman", src: "/certificates/Goldman.png", title: "Goldman Sachs Software Engineering Job Simulation" }
            ].map((cert) => (
              <div key={cert.key} className="mx-4 flex flex-col items-center">
                <div className="border-4 border-black p-2 rounded-lg shadow-lg">
                  <img src={cert.src} alt={cert.title} className="w-28 sm:w-36 md:w-48 h-auto rounded-lg cursor-pointer" onClick={() => openModal(cert.src)} />
                </div>
                <p className="mt-2 text-center text-sm font-medium text-gray-600 w-28 sm:w-36 md:w-48">
                  {cert.title}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Modal to Enlarge Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="w-[80vw] h-auto max-h-[80vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-white font-semibold text-xl p-3"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* MyBadges Section */}
      <MyBadges />

      {/* Download Resume Section */}
      <div className="flex justify-center mt-10">
        <a 
          href="/abhishek_jadhav_resume.pdf" 
          download 
          className="text-xl sm:text-2xl md:text-3xl font-semibold"
        >
          Click Here to Download  
          <span className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 ml-2 rounded-lg shadow-md shadow-blue-400/50 transition-transform transform hover:scale-105 hover:shadow-xl">
            My Resume
          </span>
        </a>
      </div>

      <hr className="border-slate-200 mt-16" />

      {/* Call to Action */}
      <CTA />
    </section>
  );
};

export default About;


// import React, { useState } from 'react';
// import { skills, experiences } from '../constants';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import CTA from '../components/CTA';
// import Marquee from 'react-fast-marquee';
// import MyBadges from '../pages/MyBadges';

// const About = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Open modal with selected image
//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <section className="max-container px-4 sm:px-8 lg:px-16 py-8">
//       <h1 className="head-text text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
//         Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Abhishek</span>
//       </h1>

//       <div className="mt-5 flex flex-col gap-3 text-slate-500 text-center">
//         <p className="text-lg sm:text-xl">Harvard Certified Software Engineer</p>
//       </div>

//       {/* Skills Section */}
//       <div className="mt-16 flex flex-wrap justify-center gap-8">
//         {skills.map((skill) => (
//           <div key={skill.name} className="block-container w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
//             <div className="btn-back rounded-xl" />
//             <div className="btn-front rounded-xl flex justify-center items-center">
//               <img
//                 src={skill.imageUrl}
//                 alt={skill.name}
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Work Experience Section */}
//       <div className="py-16">
//         <h3 className="subhead-text text-center text-2xl sm:text-3xl font-semibold">Work Experience</h3>
//         <div className="mt-5 flex flex-col gap-3 text-slate-500 text-center">
//           <p className="text-lg sm:text-xl">I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:</p>
//         </div>

//         <div className="mt-12 flex justify-center">
//           <VerticalTimeline>
//             {experiences.map((experience) => (
//               <VerticalTimelineElement
//                 key={experience.company_name}
//                 date={experience.date}
//                 icon={<div className="flex justify-center items-center w-full h-full">
//                   <img
//                     src={experience.icon}
//                     alt={experience.company_name}
//                     className="w-[60%] h-[60%] object-contain"
//                   />
//                 </div>}
//                 iconStyle={{ background: experience.iconBg }}
//                 contentStyle={{
//                   borderBottom: '8px',
//                   borderStyle: 'solid',
//                   borderBottomColor: experience.iconBg,
//                   boxShadow: 'none',
//                 }}
//               >
//                 <div>
//                   <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
//                   <p className="text-black-500 font-medium">{experience.company_name}</p>
//                 </div>
//                 <ul className="my-5 list-disc ml-5 space-y-2">
//                   {experience.points.map((point, index) => (
//                     <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">{point}</li>
//                   ))}
//                 </ul>
//               </VerticalTimelineElement>
//             ))}
//           </VerticalTimeline>
//         </div>
//       </div>

//       {/* Certificates Section with Infinite Marquee */}
//       <div className="py-10 flex flex-col">
//         <h3 className="subhead-text text-center text-2xl sm:text-3xl font-semibold">My Certificates</h3>

//         <div className="mt-10">
//           <Marquee pauseOnHover speed={50} gradient={true} gradientWidth={100}>
//             {[
//               { key: "CS50x", src: "/certificates/CS50x2.png", title: "Harvard CS50 Certificate" },
//               { key: "AWS", src: "/certificates/Openshift.png", title: "Red Hat Openshift Administrator (DO280)" },
//               { key: "ReactNanodegree", src: "/certificates/RHCSA.png", title: "Red Hat Certified System Administrator" },
//               { key: "Imperial", src: "/certificates/Imperial.png", title: "Imperial College London Creative Thinking Certificate" },
//               { key: "Networking", src: "/certificates/Networking.png", title: "Introduction to Networking by NVIDIA" },
//               { key: "Docker", src: "/certificates/Docker.png", title: "Docker Essentials by IBM" },
//               { key: "Kubernetes", src: "/certificates/Kubernetes.png", title: "Container and Kubernetes Essentials by IBM" },
//               { key: "Open", src: "/certificates/Open Source.png", title: "Open Source Foundations by IBM" },
//               { key: "Goldman", src: "/certificates/Goldman.png", title: "Goldman Sachs Software Engineering Job Simulation" }
//             ].map((cert) => (
//               <div key={cert.key} className="mx-4 flex flex-col items-center">
//                 <div className="certificate-box">
//                   <img
//                     src={cert.src}
//                     alt={cert.title}
//                     className="w-40 sm:w-48 md:w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                     onClick={() => openModal(cert.src)}
//                   />
//                 </div>
//                 <p className="mt-3 text-center text-sm font-medium text-gray-600 w-40 sm:w-48 md:w-60 h-10 flex items-center justify-center">{cert.title}</p>
//               </div>
//             ))}
//           </Marquee>
//         </div>
//       </div>

//       {/* Modal to Enlarge Image */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="relative">
//             <img
//               src={selectedImage}
//               alt="Enlarged Certificate"
//               className="w-[80vw] h-auto max-h-[80vh] object-contain"
//             />
//             <button
//               onClick={closeModal}
//               className="absolute top-0 right-0 text-white font-semibold text-xl p-3"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}

//       {/* MyBadges Section */}
//       <MyBadges />

//       {/* Download Resume Section */}
//       <div className="flex justify-center mt-10">
//         <a 
//           href="/abhishek_jadhav_resume.pdf" 
//           download 
//           className="text-xl sm:text-2xl md:text-3xl font-semibold"
//         >
//           Click Here to Download  
//           <span className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 ml-2 rounded-lg shadow-md shadow-blue-400/50 transition-transform transform hover:scale-105 hover:shadow-xl">
//             My Resume
//           </span>
//         </a>
//       </div>

//       <hr className="border-slate-200 mt-16" />

//       {/* Call to Action */}
//       <CTA />
//     </section>
//   );
// };

// export default About;


// import React, { useState } from 'react';
// import Slider from 'react-slick'; // Import Slider from react-slick
// import { skills, experiences } from '../constants';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import CTA from '../components/CTA';
// import { Link } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MyBadges from '../pages/MyBadges';


// const About = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility
//   const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image

//   // Function to open modal with the clicked image
//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//   };

//   // Slick Slider settings
//   const sliderSettings = {
//     autoplay: true,      // Automatically slides
//     autoplaySpeed: 3000, // Delay between slides (in ms)
//     arrows: false,       // Hide arrows
//     dots: true,          // Show navigation dots
//     infinite: true,      // Loop the slides
//     speed: 1000,         // Speed of transition
//     slidesToShow: 3,     // Number of slides shown at a time
//     slidesToScroll: 1,   // Number of slides to scroll at a time
//     responsive: [
//       {
//         breakpoint: 1024, // Adjust for tablets
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768, // Adjust for mobile
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <section className="max-container px-4 sm:px-8 lg:px-16 py-8">
//       <h1 className="head-text text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
//         Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Abhishek</span>
//       </h1>

//       <div className="mt-5 flex flex-col gap-3 text-slate-500 text-center">
//         <p className="text-lg sm:text-xl">Harvard Certified Software Engineer</p>
//       </div>

//       {/* Skills Section */}
//       <div className="mt-16 flex flex-wrap justify-center gap-8">
//         {skills.map((skill) => (
//           <div key={skill.name} className="block-container w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
//             <div className="btn-back rounded-xl" />
//             <div className="btn-front rounded-xl flex justify-center items-center">
//               <img
//                 src={skill.imageUrl}
//                 alt={skill.name}
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Work Experience Section */}
//       <div className="py-16">
//         <h3 className="subhead-text text-center text-2xl sm:text-3xl font-semibold">Work Experience</h3>
//         <div className="mt-5 flex flex-col gap-3 text-slate-500 text-center">
//           <p className="text-lg sm:text-xl">I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:</p>
//         </div>

//         <div className="mt-12 flex justify-center">
//           <VerticalTimeline>
//             {experiences.map((experience) => (
//               <VerticalTimelineElement
//                 key={experience.company_name}
//                 date={experience.date}
//                 icon={<div className="flex justify-center items-center w-full h-full">
//                   <img
//                     src={experience.icon}
//                     alt={experience.company_name}
//                     className="w-[60%] h-[60%] object-contain"
//                   />
//                 </div>}
//                 iconStyle={{ background: experience.iconBg }}
//                 contentStyle={{
//                   borderBottom: '8px',
//                   borderStyle: 'solid',
//                   borderBottomColor: experience.iconBg,
//                   boxShadow: 'none',
//                 }}
//               >
//                 <div>
//                   <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
//                   <p className="text-black-500 font-medium">{experience.company_name}</p>
//                 </div>
//                 <ul className="my-5 list-disc ml-5 space-y-2">
//                   {experience.points.map((point, index) => (
//                     <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">{point}</li>
//                   ))}
//                 </ul>
//               </VerticalTimelineElement>
//             ))}
//           </VerticalTimeline>
//         </div>
//       </div>

//       {/* Certificates Section with Slider */}
//       <div className="py-10 flex flex-col">
//         <h3 className="subhead-text text-center text-2xl sm:text-3xl font-semibold">My Certificates</h3>

//         <div className="mt-10">
//           <Slider {...sliderSettings}>
//             {/* Certificates Slides */}
//             <div key="CS50x" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/CS50x2.png"
//                   alt="Harvard CS50 Certificate"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/CS50x2.png')} // Open modal with image
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Harvard CS50 Certificate</p>
//             </div>
//             <div key="AWS" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/Openshift.png"
//                   alt="Red Hat Openshift Administrator (DO280)"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/Openshift.png')}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Red Hat Openshift Administrator (DO280)</p>
//             </div>
//             <div key="ReactNanodegree" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/RHCSA.png"
//                   alt="React Nanodegree by Udacity"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/react-nanodegree.png')}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Red Hat Certified System Administrator</p>
//             </div>
//             <div key="Imperial" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/Imperial.png"
//                   alt="React Nanodegree by Udacity"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/Imperial.png')}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Imperial College London Creative Thinking Certificate</p>
//             </div>

//             <div key="Networking" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/Networking.png"
//                   alt="React Nanodegree by Udacity"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/Networking.png')}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Introduction to Networking by NVIDIA</p>
//             </div>

//             <div key="Docker" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/Docker.png"
//                   alt="React Nanodegree by Udacity"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/Docker.png')}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Docker Essentials by IBM</p>
//             </div>

//             <div key="Kubernetes" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/Kubernetes.png"
//                   alt="React Nanodegree by Udacity"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/Kubernetes.png')}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Container and Kuberenetes Essentials by IBM</p>
//             </div>

//             <div key="Open" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/Open Source.png"
//                   alt="React Nanodegree by Udacity"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/Open Source.png')}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Open Source Foundations by IBM</p>
//             </div>


//             <div key="Goldman" className="flex flex-col items-center">
//               <div className="certificate-box">
//                 <img
//                   src="/certificates/Goldman.png"
//                   alt="React Nanodegree by Udacity"
//                   className="w-60 h-auto rounded-lg shadow-lg cursor-pointer"
//                   onClick={() => openModal('/certificates/Goldman.png')}
//                 />
//               </div>
//               <p className="mt-3 text-center text-sm font-medium text-gray-600 w-60 h-10 flex items-center justify-center">Goldman Sachs Software Engineering Job Simulation</p>
//             </div>
    


//           </Slider>
//         </div>
//       </div>

//       {/* Modal to Enlarge Image */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="relative">
//             <img
//               src={selectedImage}
//               alt="Enlarged Certificate"
//               className="w-[80vw] h-auto max-h-[80vh] object-contain"
//             />
//             <button
//               onClick={closeModal}
//               className="absolute top-0 right-0 text-white font-semibold text-xl p-3"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}

// <MyBadges />


// <div className="flex justify-center mt-10">
//   <a 
//     href="/abhishek_jadhav_resume.pdf" 
//     download 
//     className="text-xl sm:text-2xl md:text-3xl font-semibold"
//   >
//     Click Here to Download  
//     <span className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 ml-2 rounded-lg shadow-md shadow-blue-400/50 transition-transform transform hover:scale-105 hover:shadow-xl">
//       My Resume
//     </span>
//   </a>
// </div>





//       <hr className="border-slate-200 mt-16" />

//       <CTA />
//     </section>
//   );
// };

// export default About;
