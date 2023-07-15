import React from "react";
import axios from "axios";
import { useState } from "react";

export const Createexercise = () => {
  const [formData, setFormData] = useState({
    username: "",
    description: "",
    duration: "",
    date: "",
  });

  const { username, description, duration, date } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can access the form data using the formData object
    axios
      .post("http://localhost:5000/exercises/add", formData)
      .then((response) => {
        console.log(response.data);
        // Handle successful response
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
    console.log(formData);
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block font-medium mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full border rounded p-2"
          value={username}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-medium mb-1">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className="w-full border rounded p-2"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="duration" className="block font-medium mb-1">
          Duration (in minutes)
        </label>
        <input
          type="number"
          id="duration"
          name="duration"
          className="w-full border rounded p-2"
          value={duration}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block font-medium mb-1">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full border rounded p-2"
          value={date}
          onChange={handleChange}
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
