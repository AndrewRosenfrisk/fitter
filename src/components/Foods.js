import React, { Fragment, useState, useContext, useEffect } from "react";
import Food from "./Food";
import NewFood from "./NewFood";
import Modal from "./UI/Modal";
import FoodsContext from "../store/foods-context";

const Foods = () => {
  const [hideModal, setHideModal] = useState(true);

  const toggleFoods = () => {
    setHideModal((prevState) => !prevState);
  };

  const foodsCtx = useContext(FoodsContext);

  const removeFoodHandler = (id) => {
   foodsCtx.removeFood(id);
  };
  const addFoodHandler = (food) => {
    foodsCtx.addFood(food);
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
      {!hideModal && (
        <Modal onClose={toggleFoods}>
          <NewFood toggleModal={toggleFoods} onAdd={addFoodHandler} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Foods;
