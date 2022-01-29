import React, { useState, useContext } from "react";
import FoodsContext from "../store/foods-context";

const FoodDetails = (props) => {
  const [newFood, setNewFood] = useState(props.food);

  const foodsCtx = useContext(FoodsContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      foodsCtx.editFood(newFood);
      props.onCancelFood();
    } catch (error) {
      props.onCancelFood();
      throw new Error(error.message);
    }
  };

  const foodChangeHandler = (e) => {
    const updatedFood = { ...newFood, [e.target.id]: e.target.value };
    setNewFood(updatedFood);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={newFood.name}
          onChange={foodChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="portion">Portion (g): </label>
        <input
          id="portion"
          type="number"
          min={0}
          step={0.1}
          value={newFood.portion}
          onChange={foodChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories: </label>
        <input
          id="calories"
          type="number"
          min={0}
          value={newFood.calories}
          onChange={foodChangeHandler}
        />
      </div>
      <button type="button" onClick={props.onCancelFood}>
        Cancel
      </button>
      <button>Save</button>
    </form>
  );
};

export default FoodDetails;
