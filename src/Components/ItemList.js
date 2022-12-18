import Item from "./Item";
import Card from "./UI/Card";
import "./ItemList.css";
import ExpenseFilter from "./NewItem/ExpenseFilter";
import { useState } from "react";
import ItemsListDisplay from "./ItemsListDisplay"
const ItemList = function (props) {
  const [selectedYear, setYear] = useState("");

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };
  

  const filteredItems = props.itemsArray.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onYearChange={handleYearChange}
        />
        <ItemsListDisplay filteredItems = {filteredItems}/>
      </Card>
    </div>
  );
};

export default ItemList;
