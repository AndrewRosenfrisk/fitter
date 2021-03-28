import React, { useState } from "react";
import FoodItem from './FoodItem';

export default function FoodPage(props) {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(name);
        setName("");
    }

    const foodItemList = props.foodItems.map(item => (
        <FoodItem
            id={item.id}
            name={item.name}
            servingSize={item.servingSize}
            calories={item.calories}
            key={item.id} />
    ));

    return (
        <div className="food">
            <form onSubmit={handleSubmit}>
                <h1>Food</h1>
                <input
                    type="text"
                    id="new-fooditem-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange} />
                <button type="submit">+ Food</button>
            </form>
            <ul>
                {foodItemList}
            </ul>
        </div>
    );
}