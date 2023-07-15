import React from "react";
import { Routes, Route } from "react-router-dom";
import { ExerciseList } from "../pages/ExerciseList";
import { Createexercise } from "../pages/CreateExercise";
import { EditExercise } from "../pages/EditExercise";
import { Createuser } from "../pages/CreateUser";

export const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ExerciseList />} />
        {/* <Route path="/:exerciseId" element={<ExerciseList />} /> */}
        <Route path="/createExercise" element={<Createexercise />} />
        <Route path="/:id" element={<EditExercise />} />
        <Route path="/createUser" element={<Createuser />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};
