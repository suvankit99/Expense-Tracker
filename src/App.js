import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Item from "./Components/Item";
import ItemList from "./Components/ItemList";
import NewItem from "./Components/NewItem/NewItem";
const defaultItems = [
  {
    key : 1 ,
    date: new Date(2022, 12, 6),
    name: "Car",
    price: 150,
  },
  {
    key : 2 , 
    date: new Date(2022, 11, 7),
    name: "Fruits",
    price: 20,
  },
  {
    key : 3 ,
    date: new Date(2022, 10, 8),
    name: "Vegetables",
    price: 125,
  },
];
function App() {
  const [itemList , setItemList] = useState(defaultItems) ;
  const handleNewItemChange = (newData) => {
    const enteredData = {
      ...newData , id : Math.random().toString ,
    }
    setItemList((prevState) => {
      return [...prevState , enteredData] 
    });
    
  }
  return (
    <div className="App">
    <></>
      <NewItem onNewItemChange = {handleNewItemChange}/>
      <ItemList itemsArray = {itemList}/>
      
    </div>
  );
}

export default App;
