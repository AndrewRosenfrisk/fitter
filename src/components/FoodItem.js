import React, { useState } from "react";

export default function FoodItem(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [newServingSize, setNewServingSize] = useState(0);
    const [newCalories, setNewCalories] = useState(0);

    function handleNameChange(e) {
        setNewName(e.target.value);
    }

    function handleServingSizeChange(e) {
        setNewServingSize(e.target.value);
    }

    function handleCalorieChange(e) {
        setNewCalories(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editFoodItem(props.id, newName, newServingSize, newCalories);
        setNewName("");
        setNewServingSize(0);
        setNewCalories(0);
        setEditing(false);
    }

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={"servingSize" + props.id}>
                    New serving size for {props.servingSize}
                </label>
                <input
                    id={"servingSize" + props.id}
                    type="number"
                    value={newServingSize ? newServingSize : props.servingSize}
                    onChange={handleServingSizeChange}
                />
                <label htmlFor={"name" + props.id}>
                    New name for {props.name}
                </label>
                <input
                    id={"name" + props.id}
                    type="text"
                    value={newName ? newName : props.name}
                    onChange={handleNameChange}
                />
                <label htmlFor={"calories" + props.id}>
                    New calories for {props.calories}
                </label>
                <input
                    id={"calories" + props.id}
                    type="number"
                    value={newCalories ? newCalories : props.calories}
                    onChange={handleCalorieChange}
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => setEditing(false)}
                >
                    Cancel
                    <span> edit {props.name}</span>
                </button>
                <button type="submit">
                    Save
                        <span> new values for {props.name}</span>
                </button>
            </div>
        </form>
    );

    const viewTemplate = (
        <div>
            <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.selected}
                onChange={() => props.toggleFoodItemSelected(props.id)}
            />
            <label htmlFor={props.id}>
                {props.servingSize} grams of {props.name} totaling {props.calories} calories
                </label>
            <button type="button" onClick={() => setEditing(true)}>
                Edit <span>{props.name}</span>
            </button>
            <button
                type="button"
                onClick={() => props.deleteFoodItem(props.id)}>
                Delete <span>{props.name}</span>
            </button>
        </div>
    );

    return <li>{isEditing ? editingTemplate : viewTemplate}</li>;

}