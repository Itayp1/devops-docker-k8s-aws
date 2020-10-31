import React, { Component } from 'react';
import WorkerCharts from './WorkerCharts'
import WorkerCharts2 from './WorkerCharts2'

class Combinecharts extends Component {
    render() {
        return (

            <div >
                <div class="row">
                    <div class="col-sm">
                        <WorkerCharts />
                    </div>
                    <div class="col-sm">
                        <WorkerCharts2 />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <WorkerCharts />
                    </div>
                    <div class="col-sm">
                        <WorkerCharts2 />
                    </div>
                </div>
            </div>

        );
    }
}

export default Combinecharts;
