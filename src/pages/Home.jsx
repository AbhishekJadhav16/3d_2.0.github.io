import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true); // Sound ON by default ✅

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const isMobile = window.innerWidth < 768;

  const islandProps = {
    scale: isMobile ? [0.9, 0.9, 0.9] : [1, 1, 1],
    position: [0, -6.5, -43],
    rotation: [0.1, 4.7, 0],
  };

  const planeProps = {
    scale: isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3],
    position: isMobile ? [0, -1.5, 0] : [0, -4, -4],
  };

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-full ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            {...islandProps}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            {...planeProps}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className='absolute top-24 left-0 right-0 z-10 flex justify-center px-4'>
        <HomeInfo currentStage={currentStage} />
      </div>

      <div className='absolute bottom-3 left-3 z-10'>
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-8 h-8 sm:w-10 sm:h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;


// import { useState, Suspense, useEffect, useRef } from 'react'
// import { Canvas } from '@react-three/fiber'
// import Loader from '../components/Loader'
// import HomeInfo from '../components/HomeInfo';

// import Island from '../models/Island';
// import Sky from '../models/Sky';
// import Bird from '../models/Bird';
// import Plane from '../models/Plane';

// import sakura from '../assets/sakura.mp3';
// import { soundoff, soundon } from "../assets/icons";


// const Home = () => {
//     const audioRef = useRef(new Audio(sakura));
//     audioRef.current.volume = 0.4;
//     audioRef.current.loop = true;
//     const [isRotating, setIsRotating] = useState(false);
//     const [currentStage, setCurrentStage] = useState(1)
//     const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    
//     useEffect(() => {
//       if (isPlayingMusic) {
//         audioRef.current.play();
//       }
  
//       return () => {
//         audioRef.current.pause();
//       };
//     }, [isPlayingMusic]);

//     const adjustIslandForScreenSize = () => {
//         let screenScale = null;
//         let screenPosition = [0, -6.5, -43];
//         let rotation = [0.1, 4.7, 0];

//         if(window.innerWidth < 768) {
//             screenScale = [0.9, 0.9, 0.9];
//         } else {
//             screenScale = [1, 1, 1];
//         }
//         return [screenScale, screenPosition, rotation];
//     }

//     const adjustPlaneForScreenSize = () => {
//         let screenScale, screenPosition;

//         if(window.innerWidth < 768) {
//             screenScale = [1.5, 1.5, 1.5];
//             screenPosition = [0, -1.5, 0];
//         } else {
//             screenScale = [3, 3, 3];
//             screenPosition = [0, -4, -4];
//         }
//         return [screenScale, screenPosition];
//     }

//     const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
//     const [planeScale, planePosition] = adjustPlaneForScreenSize();
  
//     return (
//     <section className="w-full h-screen relative">
//          <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
//         {currentStage && <HomeInfo currentStage={currentStage} />}
//       </div>
      
//       <Canvas
//         className={`w-full h-screen bg-transparent ${
//           isRotating ? "cursor-grabbing" : "cursor-grab"
//         }`}
//         camera={{ near: 0.1, far: 1000 }}
//       >

//             <Suspense fallback={<Loader />}>
//               <directionalLight position={[1, 1, 1]} intensity={2} />
//               <ambientLight intensity={0.5} />
//               <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
              
//               <Bird />
//               <Sky isRotating={isRotating} />
//               <Island 
//                position={islandPosition}
//                scale={islandScale}
//                rotation={islandRotation}
//                isRotating={isRotating}
//                setIsRotating={setIsRotating}
//                setCurrentStage={setCurrentStage}
//                />
//                <Plane
//                isRotating={isRotating}
//                scale={planeScale}
//                position={planePosition}
//                rotation={[0, 20, 0]}
//                />
//             </Suspense>

//         </Canvas>

//         <div className='absolute bottom-2 left-2'>
//         <img
//           src={!isPlayingMusic ? soundoff : soundon}
//           alt='jukebox'
//           onClick={() => setIsPlayingMusic(!isPlayingMusic)}
//           className='w-10 h-10 cursor-pointer object-contain'
//         />
//       </div>
//     </section>
//   )
// }

// export default Home