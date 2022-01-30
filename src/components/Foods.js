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

  const removeFoodHandler = (id) => {
    try {
      foodsCtx.removeFood(id);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const addFoodHandler = (food) => {
    try {
      foodsCtx.addFood(food);
    } catch (error) {
      setShowModal(false);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    const fetchFoods = () => {
      foodsCtx.setFoods();
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
