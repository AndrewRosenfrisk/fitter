import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Foods from "./Foods";

describe("Foods component", () => {
  test('successfully adds food', () => {
      const foodsComponent = render(<Foods/>)
      const initialFoods = foodsComponent.queryAllByLabelText('Calories:');

      const addFoodButton = foodsComponent.getByText("+ Food")
      userEvent.click(addFoodButton)
      const saveButton = foodsComponent.getByText("Save")
      userEvent.click(saveButton) 
      const finalFoods = foodsComponent.queryAllByLabelText('Calories:');

    expect(initialFoods.length).toBeLessThan(finalFoods.length)
  })
});


