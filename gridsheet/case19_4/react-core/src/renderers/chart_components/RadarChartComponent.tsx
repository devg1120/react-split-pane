import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";



const RadarChartComponent = ({data, width, height}) => 

(
  <div className="container">


 <RadarChart
    cx={width/2}
    cy={height/2}
    outerRadius={70}
    width={width}
    height={height}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis />
    <Radar
      name="Mike"
      dataKey="A"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={1}
    />
  </RadarChart>

  </div>
);

export default RadarChartComponent;

