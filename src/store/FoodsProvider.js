import React, { useReducer } from "react";
import FoodsContext from "./foods-context";

const defaultFoodsState = {
  foods: [],
};

const foodsReducer = (state, action) => {
  if (action.type === "SET_FOODS") {
    return { foods: action.foods };
  }
  if (action.type === "EDIT_FOOD") {
    const existingFoodIndex = state.foods.findIndex(
      (food) => food.id === action.food.id
    );

    let updatedFoods = [...state.foods];
    updatedFoods[existingFoodIndex] = action.food;
    return { foods: updatedFoods };
  }
  if (action.type === "ADD_FOOD") {
    const updatedFoods = [...state.foods].concat(action.food);
    return { foods: updatedFoods };
  }
  if (action.type === "REMOVE_FOOD") {
    const updatedFoods = state.foods.filter((food) => food.id !== action.id);
    return { foods: updatedFoods };
  }
  return defaultFoodsState;
};

const FoodsProvider = (props) => {
  const [foodsState, dispatchFoodsAction] = useReducer(
    foodsReducer,
    defaultFoodsState
  );

  const setFoodsHandler = (foods) => {
    dispatchFoodsAction({ type: "SET_FOODS", foods: foods });
  };
  const editFoodHandler = (food) => {
    dispatchFoodsAction({ type: "EDIT_FOOD", food: food });
  };
  const addFoodHandler = (food) => {
    dispatchFoodsAction({ type: "ADD_FOOD", food: food });
  };
  const removeFoodHandler = (id) => {
    dispatchFoodsAction({ type: "REMOVE_FOOD", id: id });
  };

  const foodsContext = {
    foods: foodsState.foods,
    setFoods: setFoodsHandler,
    editFood: editFoodHandler,
    addFood: addFoodHandler,
    removeFood: removeFoodHandler,
  };

  return (
    <FoodsContext.Provider value={foodsContext}>
      {props.children}
    </FoodsContext.Provider>
  );
};

export default FoodsProvider;
