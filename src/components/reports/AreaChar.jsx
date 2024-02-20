import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

function AreaChar({data,className,stroke,fill}) {
  // console.log(data)
  return (
    <ResponsiveContainer width="100%" height="100%" className={className} >
        <AreaChart
          width={195}
          height={75}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke={stroke} fill={fill} />
        </AreaChart>
      </ResponsiveContainer>
  )
}

export default AreaChar