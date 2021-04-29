import React from "react";

const FoodsContext = React.createContext({
  foods: [],
  setFoods: (foods) => {},
  editFood: (food) => {},
  addFood: (food) => {},
  removeFood: (id) => {},
});

export default FoodsContext;
