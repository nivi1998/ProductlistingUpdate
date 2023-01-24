import React from 'react';
import LineChart from './LineChart';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import PieChart from './pieChart';
import AreaChart from './AreaChart';
import SpiderChart from './SpiderChart';
import { PlotterChart } from './PlotterChart';
import './chart.scss';
import TotalCounts from './totalCounts';

Chart.register(CategoryScale);

const index = () => {
	return (
		<div className="chart">
			<TotalCounts />
			<div className="setPattern">
				<div className="sub-container lineContainer">
					<LineChart />
				</div>

				<div className="sub-container doughnutContainer">
					<PieChart />
				</div>

				<div className="sub-container doughnutContainer">
					<DoughnutChart />
				</div>
				<div className="sub-container lineContainer">
					<BarChart />
				</div>

				<div className="sub-container lineContainer">
					<AreaChart />
				</div>

				<div className="sub-container doughnutContainer">
					<SpiderChart />
				</div>

				<div className="sub-container plotContainer">
					<PlotterChart />
				</div>
			</div>
		</div>
	);
};

export default index;
