import React, { useState } from "react";
const categoryColors = {
  Food: "pink",
  Transport: "#c7d1bbff",
  Education: "#BBDEFB",
  Entertainment: "white",
  Others: "#2ec246ff",
};
const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  const { id, description, amount, category, date } = expense;
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(description);
  const [newAmt, setNewAmt] = useState(amount);
  const handleSave = () => {
    onEdit(id, { description: newDesc, amount: parseFloat(newAmt) });
    setIsEditing(false);
  };
  return (
    <div
      className="expense-item"
      style={{ backgroundColor: categoryColors[category] }}
    >
      {isEditing ? (
        <>
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
          <input
            type="number"
            value={newAmt}
            onChange={(e) => setNewAmt(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{description}</p>
          <p>₦{amount.toLocaleString()}</p>
          <p>{category}</p>
          <p>{date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
};
export default ExpenseItem;