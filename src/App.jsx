import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaHandPointer,
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { useGLTF } from "@react-three/drei";
import { Home, About, Projects, Contact } from "./pages/index";
import Navbar from "./components/Navbar";

const usePreloadModels = () => {
  useEffect(() => {
    useGLTF.preload("/new/island.glb");
    useGLTF.preload("/new/plane.glb");
    useGLTF.preload("/new/bird.glb");
    useGLTF.preload("/new/sky.glb");
  }, []);
};

const App = () => {
  const [screenState, setScreenState] = useState("typing");
  const [showMainContent, setShowMainContent] = useState(false);

  usePreloadModels();

  useEffect(() => {
    const timeout1 = setTimeout(() => setScreenState("drag"),  18000);    // Typing → Drag
    const timeout2 = setTimeout(() => setScreenState("loading"), 22000); // Drag → Loading
    const timeout3 = setTimeout(() => setScreenState("image"), 28000);   // Loading → Image
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const handleEnterWorld = () => {
    setScreenState("exit");
    setTimeout(() => setShowMainContent(true), 1000);
  };

  return (
    <Router>
      <main
        className={`min-h-screen w-full flex justify-center items-center ${
          showMainContent ? "bg-transparent" : "bg-black"
        }`}
      >
        {!showMainContent && (
          <motion.div
            className="absolute inset-0 z-50 flex flex-col justify-center items-center text-center px-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: screenState === "exit" ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            {/* Typing Intro */}
            {screenState === "typing" && (
              <motion.div
                className="text-white text-center flex flex-col items-center space-y-6 px-4 max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-[10vw] sm:text-[6vw] font-extrabold leading-tight">
                  WELCOME TO MY <br />
                  <span className="text-indigo-400">WORLD!</span>
                </h1>
                <h2 className="text-lg sm:text-2xl font-light text-gray-300 leading-relaxed">
              <Typewriter
                  words={[
                    "I’m Abhishek Dhananjay Jadhav — a Creative Developer and DevOps Engineer building immersive 3D experiences and architecting cloud-native, DevOps-driven solutions that push the boundaries of digital innovation.",
                  ]}
                  loop={1}
                  typeSpeed={50}      // ⬅️ Typing speed reduced
                  deleteSpeed={30}     // ⬅️ Deleting speed slowed further
                  cursor
              />

                </h2>
              </motion.div>
            )}

            {/* Drag Instructions */}
            {screenState === "drag" && (
              <motion.div
                className="text-white text-lg sm:text-xl space-y-4 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <span>Drag your mouse to explore island</span>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  >
                    <FaHandPointer className="text-blue-400 text-3xl" />
                  </motion.div>
                </div>
                <span className="text-sm sm:text-base font-bold tracking-wider">
                  OR
                </span>
                <div className="flex items-center space-x-2">
                  <span>Use</span>
                  <FaArrowUp />
                  <FaArrowLeft />
                  <FaArrowDown />
                  <FaArrowRight />
                  <span>keys</span>
                </div>
              </motion.div>
            )}

            {/* Loading Screen */}
            {screenState === "loading" && (
              <motion.p
                className="text-white text-lg animate-pulse text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Loading Prime Island...
                <br />
                Ensure a stable internet connection.
              </motion.p>
            )}

            {/* Final Image & Button */}
            {screenState === "image" && (
              <>
                <motion.img
                  src="/prime2.png"
                  alt="Prime Logo"
                  className="w-2/3 max-w-md rounded-xl shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                />
    <motion.button
      onClick={handleEnterWorld}
      className="group relative mt-6 px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl text-base sm:text-lg uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50"
    >
      <span className="relative z-10 flex items-center gap-2">
        Explore Prime World
        <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-2 text-xl" />
      </span>

      {/* Glow/Aurora Effect */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-30 group-hover:opacity-60 transition-all duration-500"></span>
    </motion.button>
                {/* <motion.button
                  onClick={handleEnterWorld}
                  className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl text-base sm:text-lg uppercase tracking-wider shadow-md hover:scale-105 transition"
                >
                  Explore Prime World 
                </motion.button> */}
              </>
            )}
          </motion.div>
        )}

        {/* Main Routes */}
        {showMainContent && (
          <motion.div className="w-full min-h-screen bg-slate-300/10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        )}
      </main>
    </Router>
  );
};

export default App;

// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
// import {
//   FaHandPointer,
//   FaArrowUp,
//   FaArrowDown,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";

// import { useGLTF } from "@react-three/drei";
// import { Home, About, Projects, Contact } from "./pages/index";
// import Navbar from "./components/Navbar";

// const usePreloadModels = () => {
//   useEffect(() => {
//     useGLTF.preload("/models/island.glb");
//     useGLTF.preload("/models/plane.glb");
//     useGLTF.preload("/models/bird.glb");
//     useGLTF.preload("/models/sky.glb");
//   }, []);
// };

// const App = () => {
//   const [screenState, setScreenState] = useState("typing");
//   const [showMainContent, setShowMainContent] = useState(false);

//   usePreloadModels();

//   useEffect(() => {
//     const timeout1 = setTimeout(() => setScreenState("drag"), 8000);    // Typing → Drag
//     const timeout2 = setTimeout(() => setScreenState("loading"), 11000); // Drag → Loading
//     const timeout3 = setTimeout(() => setScreenState("image"), 15000);   // Loading → Image
//     return () => {
//       clearTimeout(timeout1);
//       clearTimeout(timeout2);
//       clearTimeout(timeout3);
//     };
//   }, []);

//   const handleEnterWorld = () => {
//     setScreenState("exit");
//     setTimeout(() => setShowMainContent(true), 1000);
//   };

//   return (
//     <Router>
//       <main
//         className={`min-h-screen w-full flex justify-center items-center ${
//           showMainContent ? "bg-transparent" : "bg-black"
//         }`}
//       >
//         {!showMainContent && (
//           <motion.div
//             className="absolute inset-0 z-50 flex flex-col justify-center items-center text-center px-4"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: screenState === "exit" ? 0 : 1 }}
//             transition={{ duration: 1 }}
//           >
//             {/* Typing Intro */}
//             {screenState === "typing" && (
//               <motion.div
//                 className="text-white text-center flex flex-col items-center space-y-6 px-4 max-w-5xl"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//               >
//                 <h1 className="text-[10vw] sm:text-[6vw] font-extrabold leading-tight">
//                   WELCOME TO MY <br />
//                   <span className="text-indigo-400">WORLD!</span>
//                 </h1>
//                 <h2 className="text-lg sm:text-2xl font-light text-gray-300 leading-relaxed">
//                   <Typewriter
//                     words={[
//                       "I’m Abhishek Dhananjay Jadhav — a Creative Developer and DevOps Engineer building immersive 3D experiences and architecting cloud-native, DevOps-driven solutions that push the boundaries of digital innovation.",
//                     ]}
//                     loop={1}
//                     typeSpeed={20}
//                     deleteSpeed={10}
//                     cursor
//                   />
//                 </h2>
//               </motion.div>
//             )}

//             {/* Drag Instructions */}
//             {screenState === "drag" && (
//               <motion.div
//                 className="text-white text-lg sm:text-xl space-y-4 flex flex-col items-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//               >
//                 <div className="flex items-center space-x-3">
//                   <span>Drag your mouse to explore island</span>
//                   <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 1.2,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <FaHandPointer className="text-blue-400 text-3xl" />
//                   </motion.div>
//                 </div>
//                 <span className="text-sm sm:text-base font-bold tracking-wider">
//                   OR
//                 </span>
//                 <div className="flex items-center space-x-2">
//                   <span>Use</span>
//                   <FaArrowUp />
//                   <FaArrowLeft />
//                   <FaArrowDown />
//                   <FaArrowRight />
//                   <span>keys</span>
//                 </div>
//               </motion.div>
//             )}

//             {/* Loading Screen */}
//             {screenState === "loading" && (
//               <motion.p
//                 className="text-white text-lg animate-pulse text-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//               >
//                 Loading Prime Island...
//                 <br />
//                 Ensure a stable internet connection.
//               </motion.p>
//             )}

//             {/* Final Image & Button */}
//             {screenState === "image" && (
//               <>
//                 <motion.img
//                   src="/prime2.png"
//                   alt="Prime Logo"
//                   className="w-2/3 max-w-md rounded-xl shadow-2xl"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 1 }}
//                 />
//                 <motion.button
//                   onClick={handleEnterWorld}
//                   className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl text-base sm:text-lg uppercase tracking-wider shadow-md hover:scale-105 transition"
//                 >
//                   Explore Prime World
//                 </motion.button>
//               </>
//             )}
//           </motion.div>
//         )}

//         {/* Main Routes */}
//         {showMainContent && (
//           <motion.div className="w-full min-h-screen bg-slate-300/10">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </motion.div>
//         )}
//       </main>
//     </Router>
//   );
// };

// export default App;

// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
// import {
//   FaHandPointer,
//   FaArrowUp,
//   FaArrowDown,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";

// import { useGLTF } from "@react-three/drei";
// import { Home, About, Projects, Contact } from "./pages/index";
// import Navbar from "./components/Navbar";

// const usePreloadModels = () => {
//   useEffect(() => {
//     useGLTF.preload("/models/island.glb");
//     useGLTF.preload("/models/plane.glb");
//     useGLTF.preload("/models/bird.glb");
//     useGLTF.preload("/models/sky.glb");
//   }, []);
// };

// const App = () => {
//   const [screenState, setScreenState] = useState("typing");
//   const [showMainContent, setShowMainContent] = useState(false);

//   usePreloadModels();

//   useEffect(() => {
//     const timeout1 = setTimeout(() => setScreenState("drag"), 6500);
//     const timeout2 = setTimeout(() => setScreenState("loading"), 8500);
//     const timeout3 = setTimeout(() => setScreenState("image"), 11500);
//     return () => {
//       clearTimeout(timeout1);
//       clearTimeout(timeout2);
//       clearTimeout(timeout3);
//     };
//   }, []);

//   const handleEnterWorld = () => {
//     setScreenState("exit");
//     setTimeout(() => setShowMainContent(true), 1000);
//   };

//   return (
//     <Router>
//       <main
//         className={`min-h-screen w-full flex justify-center items-center ${
//           showMainContent ? "bg-transparent" : "bg-black"
//         }`}
//       >
//         {!showMainContent && (
//           <motion.div
//             className="absolute inset-0 z-50 flex flex-col justify-center items-center text-center px-4"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: screenState === "exit" ? 0 : 1 }}
//             transition={{ duration: 1 }}
//           >
//             {/* Typing Intro */}
//             {screenState === "typing" && (
//               <motion.div
//                 className="text-white text-center flex flex-col items-center space-y-6 px-4 max-w-5xl"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//               >
//                 <h1 className="text-[10vw] sm:text-[6vw] font-extrabold leading-tight">
//                   WELCOME TO MY <br />
//                   <span className="text-indigo-400">WORLD!</span>
//                 </h1>
//                 <h2 className="text-lg sm:text-2xl font-light text-gray-300 leading-relaxed">
//                   <Typewriter
//                     words={[
//                       "I’m Abhishek Dhananjay Jadhav — a Creative Developer and DevOps Engineer building immersive 3D experiences and architecting cloud-native, DevOps-driven solutions that push the boundaries of digital innovation.",
//                     ]}
//                     loop={1}
//                     typeSpeed={30}
//                     deleteSpeed={20}
//                     cursor
//                   />
//                 </h2>
//               </motion.div>
//             )}

//             {/* Drag Instructions */}
//             {screenState === "drag" && (
//               <motion.div
//                 className="text-white text-lg sm:text-xl space-y-4 flex flex-col items-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//               >
//                 <div className="flex items-center space-x-3">
//                   <span>Drag your mouse to explore island</span>
//                   <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 1.2,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <FaHandPointer className="text-blue-400 text-3xl" />
//                   </motion.div>
//                 </div>
//                 <span className="text-sm sm:text-base font-bold tracking-wider">
//                   OR
//                 </span>
//                 <div className="flex items-center space-x-2">
//                   <span>Use</span>
//                   <FaArrowUp />
//                   <FaArrowLeft />
//                   <FaArrowDown />
//                   <FaArrowRight />
//                   <span>keys</span>
//                 </div>
//               </motion.div>
//             )}

//             {/* Loading Screen */}
//             {screenState === "loading" && (
//               <motion.p
//                 className="text-white text-lg animate-pulse text-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//               >
//                 Loading Prime Island...
//                 <br />
//                 Ensure a stable internet connection.
//               </motion.p>
//             )}

//             {/* Final Image & Button */}
//             {screenState === "image" && (
//               <>
//                 <motion.img
//                   src="/prime2.png"
//                   alt="Prime Logo"
//                   className="w-2/3 max-w-md rounded-xl shadow-2xl"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 1 }}
//                 />
//                 <motion.button
//                   onClick={handleEnterWorld}
//                   className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl text-base sm:text-lg uppercase tracking-wider shadow-md hover:scale-105 transition"
//                 >
//                   Explore Prime World
//                 </motion.button>
//               </>
//             )}
//           </motion.div>
//         )}

//         {/* Main Routes */}
//         {showMainContent && (
//           <motion.div className="w-full min-h-screen bg-slate-300/10">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </motion.div>
//         )}
//       </main>
//     </Router>
//   );
// };

// export default App;


// // App.jsx
// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
// import {
//   FaHandPointer,
//   FaArrowUp,
//   FaArrowDown,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";

// import { useGLTF } from "@react-three/drei"; // For preloading
// import { Home, About, Projects, Contact } from "./pages/index";
// import Navbar from "./components/Navbar";

// const usePreloadModels = () => {
//   useEffect(() => {
//     useGLTF.preload("/models/island.glb");
//     useGLTF.preload("/models/plane.glb");
//     useGLTF.preload("/models/bird.glb");
//     useGLTF.preload("/models/sky.glb");
//   }, []);
// };

// const App = () => {
//   const [screenState, setScreenState] = useState("typing");
//   const [showMainContent, setShowMainContent] = useState(false);

//   usePreloadModels(); // Preload 3D models before user enters Home

//   useEffect(() => {
//     const timeout1 = setTimeout(() => setScreenState("drag"), 4000);
//     const timeout2 = setTimeout(() => setScreenState("loading"), 6000);
//     const timeout3 = setTimeout(() => setScreenState("image"), 9000);

//     return () => {
//       clearTimeout(timeout1);
//       clearTimeout(timeout2);
//       clearTimeout(timeout3);
//     };
//   }, []);

//   const handleEnterWorld = () => {
//     setScreenState("exit");
//     setTimeout(() => setShowMainContent(true), 1000);
//   };

//   return (
//     <Router>
//       <main className={`min-h-screen w-full flex justify-center items-center ${showMainContent ? "bg-transparent" : "bg-black"}`}>
//         {!showMainContent && (
//           <motion.div
//             className="absolute inset-0 z-50 flex flex-col justify-center items-center text-center px-4"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: screenState === "exit" ? 0 : 1 }}
//             transition={{ duration: 1 }}
//           >
//             {screenState === "typing" && (
//               <motion.h1 className="text-white text-[8vw] sm:text-[6vw] font-bold">
//                 Hello, I'm{" "}
//                 <span className="blue-gradient_text font-semibold drop-shadow-lg">
//                   <Typewriter
//                     words={["Abhishek Dhananjay Jadhav"]}
//                     loop={1}
//                     typeSpeed={80}
//                     deleteSpeed={50}
//                     cursor
//                   />
//                 </span>
//               </motion.h1>
//             )}

//             {screenState === "drag" && (
//               <motion.div className="text-white text-lg sm:text-xl space-y-4 flex flex-col items-center">
//                 <div className="flex items-center space-x-3">
//                   <span>Drag your mouse to explore island</span>
//                   <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
//                   >
//                     <FaHandPointer className="text-blue-400 text-3xl" />
//                   </motion.div>
//                 </div>
//                 <span className="text-sm sm:text-base font-bold tracking-wider">OR</span>
//                 <div className="flex items-center space-x-2">
//                   <span>Use</span>
//                   <FaArrowUp />
//                   <FaArrowLeft />
//                   <FaArrowDown />
//                   <FaArrowRight />
//                   <span>keys</span>
//                 </div>
//               </motion.div>
//             )}

//             {screenState === "loading" && (
//               <motion.p className="text-white text-lg animate-pulse">
//                 Loading Prime Island...<br />
//                 Ensure a stable internet connection.
//               </motion.p>
//             )}

//             {screenState === "image" && (
//               <>
//                 <motion.img
//                   src="/prime2.png"
//                   alt="Prime Logo"
//                   className="w-2/3 max-w-md rounded-lg shadow-lg"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 1 }}
//                 />
//                 <motion.button
//                   onClick={handleEnterWorld}
//                   className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl text-base sm:text-lg uppercase tracking-wider shadow-md hover:scale-105 transition"
//                 >
//                   Explore Prime World
//                 </motion.button>
//               </>
//             )}
//           </motion.div>
//         )}

//         {showMainContent && (
//           <motion.div className="w-full min-h-screen">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </motion.div>
//         )}
//       </main>
//     </Router>
//   );
// };

// export default App;

// import { useState, useEffect } from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { Home, About, Projects, Contact } from "./pages/index";
// import Navbar from "./components/Navbar";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
// import {
//   FaHandPointer,
//   FaArrowUp,
//   FaArrowDown,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";

// const App = () => {
//   const [screenState, setScreenState] = useState("typing");
//   const [showMainContent, setShowMainContent] = useState(false);

//   useEffect(() => {
//     const timeout1 = setTimeout(() => setScreenState("drag"), 4000); // 4s typing
//     const timeout2 = setTimeout(() => setScreenState("loading"), 6000); // 2s drag
//     const timeout3 = setTimeout(() => setScreenState("image"), 9000); // 3s loading

//     return () => {
//       clearTimeout(timeout1);
//       clearTimeout(timeout2);
//       clearTimeout(timeout3);
//     };
//   }, []);

//   const handleEnterWorld = () => {
//     setScreenState("exit");
//     setTimeout(() => setShowMainContent(true), 1000);
//   };

//   return (
//     <Router>
//       <main className={`min-h-screen w-full flex justify-center items-center ${showMainContent ? "bg-transparent" : "bg-black"}`}>
//         {!showMainContent && (
//           <motion.div
//             className="absolute inset-0 z-50 flex flex-col justify-center items-center text-center px-4"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: screenState === "exit" ? 0 : 1 }}
//             transition={{ duration: 1 }}
//           >
//             {screenState === "typing" && (
//               <motion.h1 className="text-white text-[8vw] sm:text-[6vw] font-bold">
//                 Hello, I'm{" "}
//                 <span className="blue-gradient_text font-semibold drop-shadow-lg">
//                   <Typewriter
//                     words={["Abhishek Dhananjay Jadhav"]}
//                     loop={1}
//                     typeSpeed={80}
//                     deleteSpeed={50}
//                     cursor
//                   />
//                 </span>
//               </motion.h1>
//             )}

//             {screenState === "drag" && (
//               <motion.div className="text-white text-lg sm:text-xl space-y-4 flex flex-col items-center">
//                 <div className="flex items-center space-x-3">
//                   <span>Drag your mouse to explore island</span>
//                   <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
//                   >
//                     <FaHandPointer className="text-blue-400 text-3xl" />
//                   </motion.div>
//                 </div>

//                 <span className="text-sm sm:text-base font-bold tracking-wider">OR</span>

//                 <div className="flex items-center space-x-2">
//                   <span>Use</span>
//                   <FaArrowUp />
//                   <FaArrowLeft />
//                   <FaArrowDown />
//                   <FaArrowRight />
//                   <span>keys</span>
//                 </div>
//               </motion.div>
//             )}

//             {screenState === "loading" && (
//               <motion.p className="text-white text-lg animate-pulse">
//                 Loading Prime Island...<br />
//                 Ensure a stable internet connection.
//               </motion.p>
//             )}

//             {screenState === "image" && (
//               <>
//                 <motion.img
//                   src="/prime2.png"
//                   alt="Prime Logo"
//                   className="w-2/3 max-w-md rounded-lg shadow-lg"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 1 }}
//                 />
//                 <motion.button
//                   onClick={handleEnterWorld}
//                   className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl text-base sm:text-lg uppercase tracking-wider shadow-md hover:scale-105 transition"
//                 >
//                   Explore Prime World
//                 </motion.button>
//               </>
//             )}
//           </motion.div>
//         )}

//         {showMainContent && (
//           <motion.div className="w-full min-h-screen">
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </motion.div>
//         )}
//       </main>
//     </Router>
//   );
// };

// export default App;