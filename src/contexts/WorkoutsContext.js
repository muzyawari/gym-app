import React, { useState, useEffect, createContext } from "react";

const WorkoutsContext = createContext();

function WorkoutsProvider({ children }) {
  const [workouts, setWorkouts] = useState(null);

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const response = await fetch("http://localhost:5000/api/workouts/");
  //     const jsonData = await response.json();

  //     if (response.ok) {
  //       setWorkouts(jsonData);
  //     }
  //   };
  //   fetchWorkouts();
  // }, []);

  const value = {
    workouts,
  };

  return (
    <WorkoutsContext.Provider value={value}>
      {children}
    </WorkoutsContext.Provider>
  );
}

export { WorkoutsContext, WorkoutsProvider };
