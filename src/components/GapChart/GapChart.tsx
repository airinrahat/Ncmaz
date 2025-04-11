// import {
// 	BarChart,
// 	Bar,
// 	XAxis,
// 	YAxis,
// 	ResponsiveContainer,
// 	Tooltip,
// } from 'recharts'
// const data = [
// 	{ name: 'Task 1', start: 2, duration: 5 },
// 	{ name: 'Task 2', start: 4, duration: 7 },
// 	{ name: 'Task 3', start: 6, duration: 3 },
// 	{ name: 'Task 4', start: 8, duration: 6 },
// ]

// const GapChart = () => {
// 	return (
// 		<div>
// 			<div className="h-64 w-full rounded-lg bg-white p-4 shadow-lg">
// 				<h2 className="mb-4 text-xl font-bold">My Account Gap Chart</h2>
// 				<ResponsiveContainer width="100%" height="100%">
// 					<BarChart
// 						layout="horizontal"
// 						data={data}
// 						margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// 					>
// 						<XAxis dataKey="name" />
// 						<YAxis type="number" domain={[0, 15]} />
// 						<Tooltip />
// 						<Bar dataKey="duration" stackId="a" fill="#8884d8" />
// 					</BarChart>
// 				</ResponsiveContainer>
// 			</div>
// 		</div>
// 	)
// }

// export default GapChart

// 'use client'

// import { Bar } from 'react-chartjs-2'
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from 'chart.js'

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// const data = {
// 	labels: ['January', 'February', 'March', 'April', 'May', 'June'],
// 	datasets: [
// 		{
// 			label: 'Previous Year',
// 			data: [50, 65, 80, 45, 60, 75],
// 			backgroundColor: 'rgba(54, 162, 235, 0.5)',
// 			borderRadius: 5,
// 		},
// 		{
// 			label: 'Current Year',
// 			data: [55, 70, 85, 50, 65, 80],
// 			backgroundColor: 'rgba(255, 99, 132, 0.5)',
// 			borderRadius: 5,
// 		},
// 	],
// }

// const options = {
// 	responsive: true,
// 	plugins: {
// 		legend: {
// 			position: 'top',
// 		},
// 		title: {
// 			display: true,
// 			text: 'Gap Chart Comparison',
// 		},
// 	},
// }

// export default function GapChart() {
// 	return (
// 		<div className="mt-5 w-1/2 rounded-lg bg-white p-6 shadow-lg">
// 			<Bar data={data} options={options} />
// 		</div>
// 	)
// }

// import { Bar, Line, Doughnut } from 'react-chartjs-2'
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// 	PointElement,
// 	LineElement,
// 	ArcElement,
// } from 'chart.js'

// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// 	PointElement,
// 	LineElement,
// 	ArcElement,
// )

// const GapChart = () => {
// 	const lineData = {
// 		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
// 		datasets: [
// 			{
// 				label: 'Sales Trend',
// 				data: [30, 45, 28, 50, 60, 48, 70],
// 				borderColor: '#3B82F6',
// 				backgroundColor: 'rgba(59, 130, 246, 0.2)',
// 				fill: true,
// 			},
// 		],
// 	}

// 	const barData = {
// 		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
// 		datasets: [
// 			{
// 				label: 'Clothing',
// 				data: [40, 60, 50, 70, 45, 30, 55],
// 				backgroundColor: '#10B981',
// 			},
// 			{
// 				label: 'Food Products',
// 				data: [20, 25, 30, 15, 40, 55, 35],
// 				backgroundColor: '#2563EB',
// 			},
// 		],
// 	}

// 	const doughnutData = {
// 		labels: [
// 			'Clothing',
// 			'Food Products',
// 			'Electronics',
// 			'Kitchen Utility',
// 			'Gardening',
// 		],
// 		datasets: [
// 			{
// 				data: [25, 30, 20, 15, 10],
// 				backgroundColor: [
// 					'#10B981',
// 					'#2563EB',
// 					'#F59E0B',
// 					'#EF4444',
// 					'#8B5CF6',
// 				],
// 			},
// 		],
// 	}

// 	return (
// 		<div className="h-screen w-full overflow-hidden bg-gray-100 p-6">
// 			<div className="flex h-full flex-col gap-6 overflow-y-auto">
// 				{/* Sales, Expenses, Profits */}
// 				<div className="grid grid-cols-3 gap-4">
// 					{['Sales', 'Expenses', 'Profits'].map((title, index) => (
// 						<div key={index} className="h-40 rounded-xl bg-white p-4 shadow-md">
// 							<h2 className="text-xl font-bold">${(index + 1) * 135000}</h2>
// 							<p className="text-gray-600">{title}</p>
// 							<Line
// 								data={lineData}
// 								options={{ maintainAspectRatio: false }}
// 								height={50}
// 							/>
// 						</div>
// 					))}
// 				</div>

// 				<div className="mt-5 grid grid-cols-2 gap-6">
// 					{/* Monthly Sales Chart */}
// 					<div className="h-80 rounded-xl bg-white p-6 shadow-md">
// 						<h3 className="mb-3 text-lg font-bold">Monthly Sales</h3>
// 						<Bar
// 							data={barData}
// 							options={{ maintainAspectRatio: false }}
// 							height={150}
// 						/>
// 					</div>

// 					{/* Department Sales Chart - Same Size as Monthly Sales */}
// 					<div className="h-80 rounded-xl bg-white p-6 shadow-md">
// 						<h3 className="mb-3 text-lg font-bold">Department Sales</h3>
// 						<Doughnut data={doughnutData} />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default GapChart

// import { Bar, Line, Doughnut } from 'react-chartjs-2'
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// 	PointElement,
// 	LineElement,
// 	ArcElement,
// } from 'chart.js'

// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// 	PointElement,
// 	LineElement,
// 	ArcElement,
// )

// const GapChart = () => {
// 	const lineData = {
// 		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
// 		datasets: [
// 			{
// 				label: 'Sales Trend',
// 				data: [30, 45, 28, 50, 60, 48, 70],
// 				borderColor: '#3B82F6',
// 				backgroundColor: 'rgba(59, 130, 246, 0.2)',
// 				fill: true,
// 			},
// 		],
// 	}

// 	const barData = {
// 		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
// 		datasets: [
// 			{
// 				label: 'Clothing',
// 				data: [40, 60, 50, 70, 45, 30, 55],
// 				backgroundColor: '#10B981',
// 			},
// 			{
// 				label: 'Food Products',
// 				data: [20, 25, 30, 15, 40, 55, 35],
// 				backgroundColor: '#2563EB',
// 			},
// 		],
// 	}

// 	const doughnutData = {
// 		labels: [
// 			'Clothing',
// 			'Food Products',
// 			'Electronics',
// 			'Kitchen Utility',
// 			'Gardening',
// 		],
// 		datasets: [
// 			{
// 				data: [25, 30, 20, 15, 10],
// 				backgroundColor: [
// 					'#10B981',
// 					'#2563EB',
// 					'#F59E0B',
// 					'#EF4444',
// 					'#8B5CF6',
// 				],
// 			},
// 		],
// 	}

// 	return (
// 		<div className="h-screen w-full overflow-auto bg-gray-100 p-6">
// 			<div className="flex h-full flex-col gap-6">
// 				{/* Sales, Expenses, Profits */}
// 				<div className="my-10 grid grid-cols-3 gap-6">
// 					{['Sales', 'Expenses', 'Profits'].map((title, index) => (
// 						<div key={index} className="h-80 rounded-xl bg-white p-4 shadow-md">
// 							<h2 className="text-3xl font-bold">${(index + 1) * 135000}</h2>{' '}
// 							<p className="text-2xl text-gray-600">{title}</p>{' '}
// 							<Line
// 								data={lineData}
// 								options={{ maintainAspectRatio: false }}
// 								height={300} // বড় করা হলো
// 								width={450} // বড় করা হলো
// 							/>
// 						</div>
// 					))}
// 				</div>

// 				<div className="mt-10 grid grid-cols-2 gap-8">
// 					{/* Monthly Sales Chart */}
// 					<div className="h-96 rounded-xl bg-white py-6 shadow-md">
// 						<h3 className="mb-5 text-4xl font-bold">Monthly Sales</h3>
// 						<Bar
// 							data={barData}
// 							options={{ maintainAspectRatio: false }}
// 							height={300}
// 							width={450}
// 						/>
// 					</div>

// 					{/* Department Sales Chart */}
// 					<div className="h-96 rounded-xl bg-white p-6 shadow-md">
// 						<h3 className="mb-5 text-4xl font-bold">Department Sales</h3>
// 						<Doughnut
// 							data={doughnutData}
// 							options={{ maintainAspectRatio: false }}
// 							height={300}
// 							width={450}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default GapChart

import { Bar, Line, Doughnut } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	ArcElement,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	ArcElement,
)

const GapChart = () => {
	const lineData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		datasets: [
			{
				label: 'Sales Trend',
				data: [30, 45, 28, 50, 60, 48, 70],
				borderColor: '#3B82F6',
				backgroundColor: 'rgba(59, 130, 246, 0.2)',
				fill: true,
			},
		],
	}

	const barData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		datasets: [
			{
				label: 'Clothing',
				data: [40, 60, 50, 70, 45, 30, 55],
				backgroundColor: '#10B981',
			},
			{
				label: 'Food Products',
				data: [20, 25, 30, 15, 40, 55, 35],
				backgroundColor: '#2563EB',
			},
		],
	}

	const doughnutData = {
		labels: [
			'Clothing',
			'Food Products',
			'Electronics',
			'Kitchen Utility',
			'Gardening',
		],
		datasets: [
			{
				data: [25, 30, 20, 15, 10],
				backgroundColor: [
					'#10B981',
					'#2563EB',
					'#F59E0B',
					'#EF4444',
					'#8B5CF6',
				],
			},
		],
	}

	return (
		<div className="h-screen w-full overflow-auto bg-gray-100 p-6">
			<div className="flex h-full flex-col gap-6">
				{/* Sales, Expenses, Profits */}
				<div className="my-10 grid grid-cols-3 gap-6">
					<div className="h-80 rounded-xl bg-white p-4 shadow-md">
						<h2 className="text-3xl font-bold">$424,652</h2>
						<p className="text-2xl text-gray-600">Sales</p>
						<Line
							data={lineData}
							options={{ maintainAspectRatio: false }}
							height={300}
							width={450}
						/>
					</div>
					<div className="h-80 rounded-xl bg-white p-4 shadow-md">
						<h2 className="text-3xl font-bold">$235,312</h2>
						<p className="text-2xl text-gray-600">Expenses</p>
						<Line
							data={lineData}
							options={{ maintainAspectRatio: false }}
							height={300}
							width={450}
						/>
					</div>
					<div className="h-80 rounded-xl bg-white p-4 shadow-md">
						<h2 className="text-3xl font-bold">$135,965</h2>
						<p className="text-2xl text-gray-600">Profits</p>
						<Line
							data={lineData}
							options={{ maintainAspectRatio: false }}
							height={300}
							width={450}
						/>
					</div>
				</div>

				<div className="mt-10 grid grid-cols-2 gap-8">
					{/* Monthly Sales Chart */}
					<div className="h-96 rounded-xl bg-white py-6 shadow-md">
						<h3 className="mb-5 text-4xl font-bold">Monthly Sales</h3>
						<Bar
							data={barData}
							options={{ maintainAspectRatio: false }}
							height={300}
							width={450}
						/>
					</div>

					{/* Department Sales Chart */}
					<div className="h-96 rounded-xl bg-white p-6 shadow-md">
						<h3 className="mb-5 text-4xl font-bold">Department Sales</h3>
						<Doughnut
							data={doughnutData}
							options={{ maintainAspectRatio: false }}
							height={300}
							width={450}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GapChart
