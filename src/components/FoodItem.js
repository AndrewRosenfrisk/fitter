import React, { useState } from "react";

export default function FoodItem(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editFoodItem(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input
                    id={props.id}
                    type="text"
                    value={newName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => setEditing(false)}
                >
                    Cancel
                    <span> renaming {props.name}</span>
                </button>
                <button type="submit">
                    Save
                        <span> new name for {props.name}</span>
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