import { useState, useEffect, useContext } from "react";

import { WorkoutsContext } from "../contexts/WorkoutsContext";

export default function Home({ folders }) {
  const { workouts } = useContext(WorkoutsContext);

  return (
    <div className="mt-5">
      <div className="block h-full w-full">
        {workouts &&
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
}
