import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setCanProceed(true); // ✅ Allow transition when fully loaded
    }
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-blue-500">WELCOME TO MY WORLD!</h1>
      <p className="mt-4 text-lg">I'm Joshua, an Interaction Designer enthusiastic about creating engaging digital experiences.</p>

      {progress < 100 ? (
        <div className="relative w-64 h-6 bg-gray-200 rounded-full mt-6">
          <div className="h-6 bg-blue-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
          <p className="absolute w-full text-center text-black text-sm top-1">LOADING...</p>
        </div>
      ) : (
        canProceed && (
          <button
            onClick={onComplete} // ✅ Ensures assets are loaded before transition
            className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Explore My World
          </button>
        )
      )}
    </div>
  );
};

export default LoadingScreen;
