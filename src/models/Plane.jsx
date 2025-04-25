import { useRef, useEffect } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      // Increase the speed of the animation by adjusting timeScale (e.g., 1.2 for slightly faster)
      actions['Take 001'].play();
      actions['Take 001'].setEffectiveTimeScale(1.2); // 1.2 is the increased speed
    } else {
      actions['Take 001'].stop();
    }
  }, [isRotating, actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;

// import { useRef, useEffect} from 'react'
// import planeScene from '../assets/3d/plane.glb';
// import { useAnimations, useGLTF } from '@react-three/drei';

// const Plane = ({ isRotating, ...props }) => {
//   const ref= useRef();
//   const { scene, animations } = useGLTF(planeScene);
//   const { actions } = useAnimations(animations, ref);

//   useEffect(() => {
//     if(isRotating) {
//         actions['Take 001'].play();
//     } else {
//         actions['Take 001'].stop();
//     }
//   })
//   return (
//     <mesh {...props} ref={ref}>
//         <primitive object={scene} />
//     </mesh>
//   )
// }

// export default Plane