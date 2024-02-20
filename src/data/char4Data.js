const data4 = [
  { name: "Page A", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page B", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page C", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page D", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page E", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page F", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page G", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page H", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page I", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page J", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page K", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page L", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
  { name: "Page M", uv: Math.floor(Math.random() * 1000), pv: Math.floor(Math.random() * 1000), amt: 2400 },
];

const totalUV = data4.reduce((sum, entry) => sum + entry.uv, 0);
const totalPV = data4.reduce((sum, entry) => sum + entry.pv, 0);

// Calculate overall profit or loss
const overallDifference = totalUV - totalPV;
const overallResult4 = overallDifference >= 0 ? true: false;

// Calculate profit or loss percentage
const percentage4 = ((Math.abs(overallDifference) / totalPV) * 100).toFixed(2);

// Export overall profit or loss and percentage4
export { data4, overallResult4, percentage4 };