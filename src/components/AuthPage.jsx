import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import AnimationGif from "../assets/Animation.gif"; // Ensure correct path

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [background, setBackground] = useState("bg-black");

  useEffect(() => {
    const gifDuration = 2500; // Adjust based on your GIF duration

    const timer = setTimeout(() => {
      setShowForm(true);
      setBackground("bg-pink-200"); // Smooth transition to pastel pink
    }, gifDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex items-center justify-center min-h-screen transition-colors duration-1000 ${background}`}>
      {!showForm ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black">
          <img 
            src={AnimationGif} 
            alt="Loading Animation" 
            className="w-[300px] h-[300px] object-contain"
          />
        </div>
      ) : (
        <div className="relative">
          {/* Smooth transition wrapper */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 transition-all duration-500 ease-in-out transform hover:scale-105">
            {isLogin ? <Login /> : <Signup />}
          </div>
          <button
            className="mt-4 text-pink-600 hover:underline absolute left-1/2 transform -translate-x-1/2"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
