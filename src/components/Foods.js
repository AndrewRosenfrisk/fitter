import React, { Fragment, useState, useContext, useEffect } from "react";
import Food from "./Food";
import NewFood from "./NewFood";
import Modal from "./UI/Modal";
import FoodsContext from "../store/foods-context";

const Foods = () => {
  const [showModal, setShowModal] = useState(true);

  const toggleFoods = () => {
    setShowModal((prevState) => !prevState);
  };

  const foodsCtx = useContext(FoodsContext);

  const removeFoodHandler = async (id) => {
    await fetch(
      `https://react-http-11b63-default-rtdb.firebaseio.com/foods/${id}.json`,
      { method: "DELETE" }
    );
    foodsCtx.removeFood(id);
  };
  const addFoodHandler = async (food) => {
    await fetch(
      "https://react-http-11b63-default-rtdb.firebaseio.com/foods.json",
      { method: "POST", body: JSON.stringify({ ...food }) }
    ).then(response => response.json())
    .then(data => {
      foodsCtx.addFood({  ...food, id: data.name})
  }
    )
    .catch((error) => {
      setShowModal(false);
      throw new Error(error.message);
    });
  };

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(
        "https://react-http-11b63-default-rtdb.firebaseio.com/foods.json"
      );
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
      console.log("infinite loop check");
      foodsCtx.setFoods(loadedFoods);
    };
    fetchFoods();
  }, []);

  return (
    <Fragment>
      <h3>My Foods</h3>
      <button onClick={toggleFoods}>+ Food</button>
      {foodsCtx.foods.map((food) => (
        <Food
          id={food.id}
          key={food.id}
          name={food.name}
          portion={food.portion}
          calories={food.calories}
          onRemove={removeFoodHandler.bind(null, food.id)}
        />
      ))}
      {!showModal && (
        <Modal onClose={toggleFoods}>
          <NewFood toggleModal={toggleFoods} onAdd={addFoodHandler} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Foods;
