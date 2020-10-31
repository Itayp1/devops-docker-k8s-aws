import React, { Component } from 'react'
import Chart from "chart.js";
// import classes from "./LineGraph.module.css";
import axios from '../apis/workerHouers'


export default class WorkerCharts extends Component {
    chartRef = React.createRef();


    refuctorworkerdates(workerData) {
        const neval = workerData
            .map(({ day }) => day)
            .filter((value, index, self) => {
                return self.indexOf(value) === index;

            })


        return neval

    }

    async componentDidMount() {
        const { data: workerData } = await axios.get("/api/workerHouers", {
            params: {
                ID: 12345
            },
        })
        const myChartRef = this.chartRef.current.getContext("2d");
        const arr = this.refuctorworkerdates(workerData)


        new Chart(myChartRef, {
            type: 'bar',
            data: {
                //Bring in data
                labels: arr,
                datasets: [{
                    label: 'worker time',
                    data: workerData.map(({ doration }) => doration),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div className={"classes.graphContainer"}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}