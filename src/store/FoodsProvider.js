import React, { useReducer } from "react";
import FoodsContext from "./foods-context";

const defaultFoodsState = {
  foods: [],
};
const BASE_URL = "https://react-http-11b63-default-rtdb.firebaseio.com/foods/";

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

  const setFoodsHandler = async () => {
    const response = await fetch(`${BASE_URL}.json`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();

    const loadedFoods = [];

    for (const key in data) {
      loadedFoods.push({
        id: key,
        calories: data[key].calories,
        name: data[key].name,
        portion: data[key].portion,
      });
    }
    dispatchFoodsAction({ type: "SET_FOODS", foods: loadedFoods });
  };

  const editFoodHandler = async (food) => {
    await fetch(`${BASE_URL}${food.id}.json`, {
      method: "PUT",
      body: JSON.stringify({ ...food }),
    }).then((response) => {
      dispatchFoodsAction({ type: "EDIT_FOOD", food: food });
    });
  };

  const addFoodHandler = async (food) => {
    await fetch(`${BASE_URL}.json`, {
      method: "POST",
      body: JSON.stringify({ ...food }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatchFoodsAction({
          type: "ADD_FOOD",
          food: { ...food, id: data.name },
        });
      });
  };
  
  const removeFoodHandler = async (id) => {
    await fetch(`${BASE_URL}${id}.json`, { method: "DELETE" }).then(
      (response) => {
        dispatchFoodsAction({ type: "REMOVE_FOOD", id: id });
      }
    );
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
