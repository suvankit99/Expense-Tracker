import react from "react";
import "./NewItem.css";
import ExpenseForm from "./ExpenseForm";

const NewItem = (props) => {
  const handleDataSubmit = (savedData) => {
    const enteredData = {
        ...savedData ,
        key: Math.random().toString() 
        
    }
    props.onNewItemChange(enteredData) ;
  };
  return (
    <div className="new-expense">
      <ExpenseForm onDataSubmit={handleDataSubmit} />
    </div>
  );
};

export default NewItem;
