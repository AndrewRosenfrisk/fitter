import React from "react";

export default function FoodItem(props) {
    return (
        <li>
            <input id={props.id} type="checkbox" />
            {props.servingSize} grams of {props.name} totaling {props.calories} calories
            <button type="button" className="btn">
                Edit
                </button>
            <button type="button" className="btn btn__danger">
                Delete
                </button>
        </li>
    );
}