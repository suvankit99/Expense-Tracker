import react from "react";
import "./NewItem.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewItem = (props) => {
  const [clicked , setClick] = useState(false) ;
  const handleCancel = (newClickVal) => {
   setClick(newClickVal) ;
  }
  const handleDataSubmit = (savedData) => {
    const enteredData = {
      ...savedData,
      key: Math.random().toString(),
    };
    props.onNewItemChange(enteredData);
  };
  let expenseForm = <ExpenseForm onDataSubmit={handleDataSubmit} onCancel = {handleCancel}/>;
  const handleClickNewItemDefault = () => {
    setClick(true) ;
  };

  return (
    <div className="new-expense">
    {clicked ? expenseForm : <button onClick = {handleClickNewItemDefault}>Add New Expense</button>}
    </div>
  );
};

export default NewItem;
