import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,

  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,

  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,

  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,

  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,

  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,

  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,

  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,

  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,

  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4300,

  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,

  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,

  },
];

export default class Demo extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#5D92F4" fill="#00D0BD" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#00D0BD" fill="#564fc1" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
