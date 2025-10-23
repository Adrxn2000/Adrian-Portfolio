import React from "react";
import BallCanvas from "./Ball";

const BallsGrid = ({ balls = [], columns = 4 }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {balls.map((technology, index) => (
        <div key={technology.name} className="w-28 h-28">
          <BallCanvas imgUrl={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default BallsGrid;
