import React, { useState } from "react";
import FoodItem from './FoodItem';
import FoodForm from './FoodForm';

export default function FoodPage(props) {
    const [foodItems, setFoodItems] = useState(props.foodItems);

    function addFoodItem(name) {
        const newFoodItem = { id: "id", name: name, servingSize: 0, calories: 0 };
        setFoodItems([...foodItems, newFoodItem]);
    }


    const foodItemList = foodItems.map(item => (
        <FoodItem
            id={item.id}
            name={item.name}
            servingSize={item.servingSize}
            calories={item.calories}
            key={item.id} />
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