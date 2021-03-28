import React, { useState } from "react";

function FoodForm(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addFoodItem(name);
        setName("");
    }

    return (
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
    );
}

export default FoodForm;