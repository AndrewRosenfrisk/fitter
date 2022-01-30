import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import FoodsProvider from "../store/FoodsProvider";
import Foods from "./Foods";

describe("Foods component", () => {
  test("successfully adds food", async () => {
    global.fetch = jest.fn((url, options) => {
      if (options?.method === "POST") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ name: "jlsdkjflskjdf" }),
        });
      }
      if (!options || options.method === "GET") {
        return Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              {
                id: "test-id",
                calories: "100",
                name: "Steak",
                portion: "50",
              },
            ]),
        });
      }
    });
    let foodsComponent;
    foodsComponent = render(
      <FoodsProvider>
        <Foods />
      </FoodsProvider>
    );
    let initialFoods;
    await act(async () => {
      initialFoods = await foodsComponent.findAllByText("Calories:", {
        exact: false,
      });
      const addFoodButton = foodsComponent.getByText("+ Food");
      userEvent.click(addFoodButton);
      const saveButton = foodsComponent.getByText("Save");
      userEvent.click(saveButton);
    });
    const finalFoods = await foodsComponent.findAllByText(
      "Calories:",
      { exact: false },
      {}
    );

    expect(initialFoods.length).toBeLessThan(finalFoods.length);
  });
});
