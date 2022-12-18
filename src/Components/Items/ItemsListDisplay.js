import Item from "./Item";
import "./ItemsListDisplay.css";
const noExpenseFoundStyle = {
  color: "white",
  fontSize: "large",
};

const ItemsListDisplay = function (props) {
  let itemsDisplayed = <h2 style={noExpenseFoundStyle}> No Expenses Found</h2>;
  if (props.filteredItems.length > 0) {
    itemsDisplayed = props.filteredItems.map((item) => (
      <Item
        key={item.key}
        purchaseDate={item.date}
        itemName={item.name}
        itemPrice={item.price}
      />
    ));
  }
  return <ul className="expenses-list">{itemsDisplayed}</ul>;
};

export default ItemsListDisplay;
