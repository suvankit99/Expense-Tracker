import Item from "./Item";
import Card from "./UI/Card";
import "./ItemList.css";
import ExpenseFilter from "./NewItem/ExpenseFilter";
import { useState } from "react";
const ItemList = function (props) {
  const [selectedYear, setYear] = useState("");
  
  const handleYearChange = (newYear) => {
    setYear(newYear);
  };
  const noExpenseFoundStyle = {
    color : "white",
    fontSize: "large"
  }
  
  const filteredItems = props.itemsArray.filter(item => {return item.date.getFullYear().toString() === selectedYear})

  let itemsDisplayed = <h2 style={noExpenseFoundStyle}> No Expenses Found</h2> ;
  if(filteredItems.length > 0){
    itemsDisplayed = filteredItems.map(item => <Item key = {item.key} purchaseDate = {item.date} itemName = {item.name} itemPrice = {item.price}/>)
  }
  return (
    <div>
      
      <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onYearChange={handleYearChange} />
      {itemsDisplayed}
      </Card>
    </div>
  );
};

export default ItemList;
