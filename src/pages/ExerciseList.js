/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ExerciseList = () => {
  const [data, setData] = useState([]);

  const handleButtonClick = async () => {
    const result = await axios.get("http://localhost:5000/exercises");

    setData(result.data);
    console.log(data);
  };
  const deletevalue = async (e) => {
    const result = await axios.delete(
      "http://localhost:5000/exercises/" + e.target.value
    );
    console.log(result.data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    handleButtonClick();
  }, []);

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Duration
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, key) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link to={`/${item._id}`}>
                  <button className="text-blue-500 hover:text-blue-700">
                    Edit
                  </button>
                </Link>
                <button
                  className="text-red-500 hover:text-red-700 ml-4"
                  onClick={deletevalue}
                  value={item._id}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
