import React, { Fragment, useState, useContext, useEffect } from "react";
import Food from "./Food";
import NewFood from "./NewFood";
import FitModal from "./UI/FitModal";
import FoodsContext from "../store/foods-context";
import { Button, ListGroup, Stack } from "react-bootstrap";

const Foods = () => {
  const [hideModal, setHideModal] = useState(false);

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
      <Stack gap={2}>
      <Button variant="outline-primary" size="lg" onClick={toggleFoods}>+ Food</Button>
      <ListGroup as="ul">
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
      </ListGroup>
      </Stack>
        <FitModal show={hideModal} title="New Entry" onClose={toggleFoods}>
          <NewFood toggleModal={toggleFoods} onAdd={addFoodHandler} />
        </FitModal>
    </Fragment>
  );
};

export default Foods;
