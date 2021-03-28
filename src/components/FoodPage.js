import { nanoid } from "nanoid";
import React, { useState } from "react";
import FoodItem from './FoodItem';
import FoodForm from './FoodForm';

export default function FoodPage(props) {
    const [foodItems, setFoodItems] = useState(props.foodItems);

    function addFoodItem(name) {
        const newFoodItem = { id: "foodItem-" + nanoid(), selected: false, name: name, servingSize: 0, calories: 0 };
        setFoodItems([...foodItems, newFoodItem]);
    }

    function toggleFoodItemSelected(id) {
        const updatedFoodItems = foodItems.map(item => {
            if (id === item.id) {
                return { ...item, selected: !item.selected }
            }
            return item;
        });
        setFoodItems(updatedFoodItems);
    }

    function deleteFoodItem(id) {
        const remainingFoodItems = foodItems.filter(item => id !== item.id);
        setFoodItems(remainingFoodItems);
    }

    function editFoodItem(id, newName) {
        const editedFoodItemList = foodItems.map(item => {
            if (id === item.id) {
                return { ...item, name: newName }
            }
            return item;
        });
        setFoodItems(editedFoodItemList);
    }

    const foodItemList = foodItems.map(item => (
        <FoodItem
            id={item.id}
            selected={item.selected}
            name={item.name}
            servingSize={item.servingSize}
            calories={item.calories}
            key={item.id}
            toggleFoodItemSelected={toggleFoodItemSelected}
            deleteFoodItem={deleteFoodItem}
            editFoodItem={editFoodItem} />
    ));

    return (
        <div className="food">
            <FoodForm addFoodItem={addFoodItem} />
            <ul>
                {foodItemList}
            </ul>
        </div>
    );
}