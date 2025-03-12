import React, { useState, useEffect } from "react";

const MyBadges = () => {
  const [credlyCount, setCredlyCount] = useState(1);
  const [skillsCount, setSkillsCount] = useState(1);

  useEffect(() => {
    const startCredlyCounter = () => {
      setCredlyCount(1); // Reset to 1 before restarting
      let credlyInterval = setInterval(() => {
        setCredlyCount((prev) => (prev >= 17 ? 17 : prev + 1));
      }, 150);

      setTimeout(() => clearInterval(credlyInterval), 150 * 17); // Stops at 17
    };

    startCredlyCounter(); // Start on mount

    const credlyLoop = setInterval(() => {
      startCredlyCounter();
    }, 5000 + 150 * 17); // Restart every 5 secs after stopping

    return () => clearInterval(credlyLoop);
  }, []);

  useEffect(() => {
    const startSkillsCounter = () => {
      setSkillsCount(1); // Reset to 1 before restarting
      let skillsInterval = setInterval(() => {
        setSkillsCount((prev) => (prev >= 44 ? 44 : prev + 1));
      }, 80);

      setTimeout(() => clearInterval(skillsInterval), 80 * 44); // Stops at 44
    };

    startSkillsCounter(); // Start on mount

    const skillsLoop = setInterval(() => {
      startSkillsCounter();
    }, 5000 + 80 * 44); // Restart every 5 secs after stopping

    return () => clearInterval(skillsLoop);
  }, []);

  return (
    <div className="py-16 flex flex-col items-center">
      <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-8">
        My Badges
      </h3>

      {/* Badge Counters (Responsive) */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {/* Credly Badges Counter */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex flex-col justify-center items-center shadow-lg shadow-blue-400/50 hover:scale-105 transition-transform">
          <p className="text-4xl sm:text-5xl font-bold animate-pulse">
            {credlyCount}
          </p>
          <span className="mt-2 text-sm sm:text-lg">Credly Badges</span>
        </div>

        {/* Skills Counter */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-xl flex flex-col justify-center items-center shadow-lg shadow-green-400/50 hover:scale-105 transition-transform">
          <p className="text-4xl sm:text-5xl font-bold animate-bounce">
            {skillsCount}
          </p>
          <span className="mt-2 text-sm sm:text-lg">Skills</span>
        </div>
      </div>

      {/* Credly Profile Link */}
      <a
        href="https://www.credly.com/users/abhishek-jadhav.b09d86cf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-lg font-semibold text-blue-500 hover:underline"
      >
        View My Credly Profile
      </a>
    </div>
  );
};

export default MyBadges;
