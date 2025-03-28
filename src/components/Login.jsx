import React from "react";

const Login = () => {
  return (
    <div className="transition-transform duration-300 hover:scale-105">
      <h2 className="text-2xl font-bold text-center text-pink-600">Login</h2>
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full mt-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <button className="w-full mt-4 bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition-colors">
        Login
      </button>
    </div>
  );
};

export default Login;
