"use client";
import { useEffect, useState } from "react";
import Exercise from "./components/Exercise";

export default function exercises() {
  const [exercisesList, setExercisesList] = useState(null);
  const musclesList = [
    "biceps",
    "abdominals",
    "abductors",
    "adductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ];

  useEffect(() => {
    var selector = document.getElementsByTagName("select");
    musclesList.map((item) => {
      var newOption = document.createElement("option");
      newOption.setAttribute("value", item);
      newOption.innerHTML = item;
      selector[0].appendChild(newOption);
    });
  }, []);

  function showMuscleExercises(event) {
    var select = document.getElementsByTagName("select")[0];
    var title = document.getElementById("muscleName");
    title.innerHTML = select.value;
    fetchMuscleExercises();
  }

  const fetchMuscleExercises = async () => {
    var selectedMuscle = document.getElementsByTagName("select")[0].value;
    const response = await fetch(
      `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${selectedMuscle}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "a8b0f51faemsh9a81291c1530c1ap10bd70jsn16a039cdc29d",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      }
    );
    const json = await response.json();
    setExercisesList(json);
  };

  return (
    <section className="text-[#d3fe76]">
      <div className="flex justify-center">
        <h2 id="muscleName" className="text-5xl uppercase"></h2>
        <select
          className="h-7 mb-0 mt-auto ml-2 p-1 pl-2 rounded-3xl bg-slate-700"
          name="select"
          onChange={(event) => showMuscleExercises(event)}
        ></select>
      </div>
      <div id="dataContainer">
        {exercisesList &&
          exercisesList.map((item) => {
            return <Exercise data={item} />;
          })}
      </div>
    </section>
  );
}
