import { useContext, useEffect, useState } from "react"
import AuthContext from "../../contexts/AuthContext"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale , registerables } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import axios from "axios";


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ...registerables);

export default () => {

    const user = useContext(AuthContext)
    const [ data , setData ] = useState()

    if (user && !data) {
        // console.log(user.token);
        axios.get("https://react-camp-api.roocket.ir/api/admin/dashboard", 
            {
                headers: {
                    Authorization: 'Bearer ' + user.token //the token is a variable which holds the token
                }
            })
            .then(res => {
                // console.log(res.data.data);
                setData(res.data.data)
            })
    }
    
    console.log(data);

    const chartData = {
        labels : data?.map((data => data.date)),
        dataset : [
            {
                label: "amount in last month",
                data: data?.map((data) => data.amount),
                backgroundColor : "white"
            }
        ]
    }

    console.log(chartData);


    return (
        <div className="p-5">
     
            <Line className="max-w-full max-h-96"
                datasetIdKey="id"
                data={{
                    labels: data?.map((data => data.date)),
                    datasets: [
                      {
                        id: 1,
                        label: '',
                        data: data?.map((data) => data.amount),
                      },
                    ],
                  }} />
        </div>
    )
}