import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Mon',
    uv: 48,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 60,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 55,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 74,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 95,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 98,
    pv: 3800,
    amt: 2500,
  },
    {
    name: 'Sun',
    uv: 60,
    pv: 3800,
    amt: 2500,
  },
];

// #endregion
export const SimpleAreaChart = () => {
  return (
    <AreaChart
      style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" stroke="#343a40" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};
