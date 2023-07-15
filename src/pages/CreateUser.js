import React from "react";
import axios from "axios";
import { useState } from "react";

export const Createuser = () => {
  const [username, setusername] = useState("");
  const handleSubmit = (e) => {
    const newUser = { username };
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/add", newUser)
      .then((response) => {
        console.log(response.data);
        // Handle successful response
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });

    setusername("");
    console.log(username);
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block font-medium mb-1">
          Username
        </label>
        <input
          type="text"
          className="w-full border rounded p-2"
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};
