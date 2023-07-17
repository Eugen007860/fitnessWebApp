import React from "react";

const Exercise = (props) => {
  const name = props.data.name;
  const type = props.data.type;
  const muscle = props.data.muscle;
  const equipment = props.data.equipment;
  const difficulty = props.data.difficulty;
  const instructions = props.data.instructions;

  return (
    <div className="flex flex-col ml-2 mr-2 mt-7 bg-[#01262e] p-3 rounded-lg">
      <h2 className="text-2xl mb-3">{name}</h2>
      <div>
        <p className="flex flex-row">
          <p className="font-bold underline">Type:</p> &nbsp;{type}
        </p>
        <p className="flex flex-row">
          <p className="font-bold underline">Muscle:</p>&nbsp;{muscle}
        </p>
        <p className="flex flex-row">
          <p className="font-bold underline">Equipment:</p>&nbsp;{equipment}
        </p>
        <p className="flex flex-row">
          <p className="font-bold underline">Difficulty:</p>&nbsp;{difficulty}
        </p>
        <p className="flex flex-row">
          <p className="font-bold underline">Instructions:</p>&nbsp;{instructions}
        </p>
      </div>
    </div>
  );
};

export default Exercise;
