import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages/index";
import Navbar from "./components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaHandPointer, FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const App = () => {
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);
    const [showTyping, setShowTyping] = useState(true);
    const [showDragScreen, setShowDragScreen] = useState(false);
    const [showFinalLoading, setShowFinalLoading] = useState(false);
    const [showImageAndButton, setShowImageAndButton] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const typingTimeout = setTimeout(() => setShowTyping(false), 8000);
        const dragTimeout = setTimeout(() => setShowDragScreen(true), 10000);
        const finalLoadingTimeout = setTimeout(() => {
            setShowDragScreen(false);
            setShowFinalLoading(true);
        }, 13000);
        const imageTimeout = setTimeout(() => {
            setShowFinalLoading(false);
            setShowImageAndButton(true);
        }, 16000);

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(dragTimeout);
            clearTimeout(finalLoadingTimeout);
            clearTimeout(imageTimeout);
        };
    }, []);

    const handleEnterWorld = () => {
        setShowImageAndButton(false);
        setTimeout(() => {
            setShowLoadingScreen(false);
            setShowContent(true);
        }, 500);
    };

    return (
        <Router>
            <main className={`min-h-screen relative flex justify-center items-center ${showContent ? "bg-transparent" : "bg-black"}`}>
                {/* LOADING SCREEN */}
                {showLoadingScreen && (
                    <motion.div
                        className="absolute inset-0 bg-black z-50 flex flex-col items-center justify-center"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: showImageAndButton ? 0 : 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        {/* Typing Animation */}
                        {showTyping && (
                            <motion.h1
                                className="text-white text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-tight text-center"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: showTyping ? 1 : 0 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            >
                                Hello, I'm{" "}
                                <span className="blue-gradient_text font-semibold drop-shadow-lg">
                                    <Typewriter
                                        words={["Abhishek Dhananjay Jadhav"]}
                                        loop={1}
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        cursor
                                    />
                                </span>
                            </motion.h1>
                        )}

                        {/* Drag Mouse / Use Arrow Keys */}
                        {showDragScreen && (
                            <motion.div
                                className="text-white text-lg sm:text-xl flex flex-col items-center px-6 py-3 rounded-lg text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div
                                    className="flex items-center space-x-2 animate-pulse"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
                                >
                                    <span>Drag</span>
                                    <FaHandPointer className="text-blue-400 text-3xl" />
                                    <span>mouse to explore the island</span>
                                </motion.div>

                                <motion.div
                                    className="flex items-center space-x-2 mt-3 animate-pulse"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
                                >
                                    <FaArrowUp className="text-blue-400 text-2xl" />
                                    <FaArrowLeft className="text-blue-400 text-2xl" />
                                    <FaArrowDown className="text-blue-400 text-2xl" />
                                    <FaArrowRight className="text-blue-400 text-2xl" />
                                    <span>Or Use arrow keys</span>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Final Loading */}
                        {showFinalLoading && (
                            <motion.p
                                className="text-white text-lg sm:text-xl px-6 py-3 rounded-lg text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                            >
                                Loading Prime Island... <br />
                                Ensure a stable internet connection for the best experience.
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {/* IMAGE & BUTTON */}
                {showImageAndButton && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <motion.img
                            src="/prime2.png"
                            alt="Prime Logo"
                            className="w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] mt-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        <motion.button
                            onClick={handleEnterWorld}
                            className="mt-6 text-white font-bold py-3 px-8 text-lg sm:text-xl rounded-lg transition-all duration-500 relative overflow-hidden shadow-lg 
                                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 hover:shadow-blue-400/50"
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                                boxShadow: "0px 0px 15px rgba(0, 162, 255, 0.5)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                        >
                            EXPLORE PRIME WORLD
                        </motion.button>
                    </motion.div>
                )}

                {/* MAIN CONTENT */}
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full bg-transparent"
                    >
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

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { Home, About, Projects, Contact } from './pages/index';
// import Navbar from './components/Navbar';

// const App = () => {
//     return (
//  <main className="bg-slate-300/20 h-full">
//     <Router>
//        <Navbar />
//          <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />


//          </Routes>
//     </Router>

//       </main>
//     )
// }

// export default App