import "./Item.css"
import Card from "./UI/Card"
import { useState } from "react";
import ItemDate
 from "./ItemDate";
const Item = function(props){
  const [title , setTitle] = useState(props.itemName);
  return (
    <Card className = "expense-item">
      <ItemDate Date = {props.purchaseDate}/>
      <div className = "expense-item__description">
        <h2>{title}</h2>
        <div className = "expense-item__price">${props.itemPrice}</div>
      </div>
    </Card>
  );
};

export default Item;
