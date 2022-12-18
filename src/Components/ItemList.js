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
  return (
    <div>
      
      <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onYearChange={handleYearChange} />
      {props.itemsArray.map(item => <Item key = {item.key} purchaseDate = {item.date} itemName = {item.name} itemPrice = {item.price}/>)}
      </Card>
    </div>
  );
};

export default ItemList;
