import React, { useEffect, useState } from "react";
import animationGif from "../assets/Animation.gif";
import AuthPage from "./AuthPage"; // Ensure correct path

const Preloader = () => {
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAuth(true);
    }, 3000); // Show auth page after 3 seconds

    return () => clearTimeout(timer);
  }, []); // Ensures it runs only once

  return showAuth ? (
    <AuthPage />
  ) : (
    <div className="fixed inset-0 flex justify-center items-center bg-black">
      <img 
        src={animationGif} 
        alt="Loading animation" 
        className="w-[300px] h-[300px] object-contain"
      />
    </div>
  );
};

export default Preloader;
