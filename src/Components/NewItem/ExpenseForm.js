import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [newName, setName] = useState("");
  const [newPrice, setPrice] = useState("");
  const [newDate, setDate] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItemData = {
      date: new Date(newDate),
      name: newName,
      price: newPrice,
    };
    props.onDataSubmit(newItemData);
    setDate("");
    setName("");
    setPrice("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              onChange={handleDateChange}
              value={newDate}
              min = "2019-01-01"
              max = "2022-12-31"
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Name</label>
            <input
              type="text"
              onChange={handleNameChange}
              value={newName}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={handlePriceChange}
              value={newPrice}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
