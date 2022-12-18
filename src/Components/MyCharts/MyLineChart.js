import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
const MyLineChart = (props) => {
  return (
    <div className="line-chart">
      <LineChart width={750} height={200} data={props.data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#1A120B"
          strokeWidth={3}
        />
        <CartesianGrid stroke="#000" />
        <XAxis dataKey="label" />
        <YAxis />
      </LineChart>
    </div>
  );
};
export default MyLineChart ; 