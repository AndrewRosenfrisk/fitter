import React, { useState } from "react";

const NewFood = (props) => {
  const [name, setName] = useState("");
  const [portion, setPortion] = useState(0);
  const [calories, setCalories] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onAdd({
      id: Math.random(),
      name: name,
      portion: portion,
      calories: calories,
    });

    setName("");
    setPortion(0);
    setCalories(0);
    props.toggleModal();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="portion">Portion (g): </label>
        <input
          id="portion"
          type="number"
          min={0}
          step={0.1}
          onChange={(e) => {
            setPortion(e.target.value);
          }}
          value={portion}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories: </label>
        <input
          id="calories"
          type="number"
          min={0}
          onChange={(e) => {
            setCalories(e.target.value);
          }}
          value={calories}
        />
      </div>
      <button type="button" onClick={props.toggleModal}>
        Cancel
      </button>
      <button>Save</button>
    </form>
  );
};

export default NewFood;
