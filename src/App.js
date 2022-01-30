import React from "react";
import Foods from "./components/Foods";
import FoodsProvider from "./store/FoodsProvider";
import { Tab } from "bootstrap";
import { Stack, Tabs } from "react-bootstrap";

function App() {
  return (
    <Stack gap={2}>
      <h1>Fitter</h1>
      <Tabs>
        <Tab eventKey="foods" title="Foods" >
        <FoodsProvider>
          <Foods>Foods</Foods>
        </FoodsProvider>
        </Tab>
        <Tab eventKey="recipes" title="Recipes" disabled>
        </Tab>
        <Tab eventKey="diary" title="Diary" disabled>
        </Tab>
      </Tabs>
    </Stack>
  );
}

export default App;
