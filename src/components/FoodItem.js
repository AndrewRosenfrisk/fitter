import React from "react";

export default function FoodItem(props) {
    return (
        <li>
            <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.selected}
                onChange={() => props.toggleFoodItemSelected(props.id)}
            />
            {props.servingSize} grams of {props.name} totaling {props.calories} calories
            <button type="button" className="btn">
                Edit
                </button>
            <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteFoodItem(props.id)}
            >
                Delete
                </button>
        </li>
    );
}