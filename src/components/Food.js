import React, { useState } from "react";
import FoodDetails from "./FoodDetails";
import Modal from "./UI/Modal";

const Food = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div key={props.id}>
      {isEditing && (
        <Modal
          onClose={() => {
            setIsEditing(false);
          }}
        >
          <FoodDetails
            food={{ ...props }}
            onCancelFood={() => {
              setIsEditing(false);
            }}
          />
        </Modal>
      )}
      <strong> Name:</strong> {props.name}
      <div>
        <strong>Portion (g):</strong> {props.portion}
      </div>
      <div>
        <strong>Calories:</strong> {props.calories}
      </div>
      <button
        onClick={() => {
          setIsEditing(true);
        }}
      >
        Edit
      </button>
      <button onClick={() => props.onRemove(props.id)}>X</button>
      <br />
    </div>
  );
};

export default Food;
