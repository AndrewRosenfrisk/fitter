import React from "react";
import Foods from "./components/Foods";
import FoodsProvider from "./store/FoodsProvider";

function App() {
  return (
    <div>
      <h1>Fitter</h1>
      <FoodsProvider>
        <Foods>Foods</Foods>
      </FoodsProvider>
      {/* <h3>Recipes</h3>
      <h3>Diary</h3> */}
    </div>
  );
}

export default App;
