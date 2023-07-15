import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white font-bold text-xl tracking-wide hover:text-blue-200"
        >
          Exercise Tracker
        </Link>

        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            Exercise List
          </Link>
          <Link
            to="/createExercise"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            Create Exercise
          </Link>
          <Link
            to="/createUser"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            Create User
          </Link>
        </div>
      </div>
    </nav>
  );
};
