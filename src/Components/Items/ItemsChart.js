import Chart from "../Charts/Chart";
import MyLineChart from "../MyCharts/MyLineChart";
import "../MyCharts/MyLineChart.css"
const ItemsChart = (props) => {
  const ChartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  const itemsArray = props.items;
  for (let item of itemsArray) {
    const month = item.date.getMonth();
    ChartData[month].value += item.price;
  }
  return (
    <div>
      <Chart dataPoints={ChartData} />
      <MyLineChart data = {ChartData} />
    </div>
  );
};

export default ItemsChart;
