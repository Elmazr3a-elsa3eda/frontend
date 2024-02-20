import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function SalesChart() {
	const data = [
		{
			name: "Aswan",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2400,
		},
		{
			name: "Luxor",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Qena",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Sohag",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Asyut",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Minya",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Beni Suef",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Faiyum",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Giza",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Cairo",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Alexandria",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Suez",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Kafr El Sheikh",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Minya",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "New Valley",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
		{
			name: "Red Sea",
			uv: Math.floor(Math.random() * 1000),
			pv: Math.floor(Math.random() * 1000),
			amt: 2100,
		},
	];

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart width={450} height={60} data={data}>
				<Bar dataKey="uv" fill="#15cab85e" />
				<Tooltip />
				<XAxis dataKey={"name"} width={"20px"} />
				<YAxis />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default SalesChart;
