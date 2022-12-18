import "./ItemDate.css"

const ItemDate = function (props) {
  const month = props.Date.toLocaleString("en-US", { month: "long" });
  const day = props.Date.toLocaleString("en-US", { day: "numeric" });
  const year = props.Date.toLocaleString("en-US", { year: "numeric" });
  return (
    <div className = "expense-date">
      <div className = "expense-date__day"> {day} </div>
      <div className = "expense-date__month"> {month} </div>
      <div className = "expense-date__year"> {year} </div>
    </div>
  );
};

export default ItemDate;
