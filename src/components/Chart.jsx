import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";
import { useState } from "react";
import { Chart, Doughnut } from "react-chartjs-2";


Chart.register(CategoryScale);


export default function App() {
    const [chartData, setChartData] = useState({
      labels: Data.map((data) => data.year), 
      datasets: [
        {
          label: "Users Gained ",
          data: Data.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ]
    });
   
    return (
      <div className="App">
        <p>Using Chart.js in React</p>
      </div>
    );
  }