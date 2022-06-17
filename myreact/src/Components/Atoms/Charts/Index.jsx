import React, { PureComponent } from 'react';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '0',
        series: 20,
        series: 5,

    },
    {
        name: '1',
        series: 20,
        series: 70,

    },
    {
        name: '2',
        series: 20,
        series: 70,

    },
    {
        name: '3',
        series: 40,
        series: 60,

    },
    {
        name: '4',
        series: 50,
        series: 15,
    },

    {
        name: '5',
        series: 8,
        series: 10,

    },
    {
        name: '6',
        series: 50,
        series: 55,
    },
    {
        name: '7',
        series: 30,
        series: 65,

    },
    {
        name: '8',
        series: 60,
        series: 20,

    },
    {
        name: '9',
        series: 35,
        series: 65,

    },
    {
        name: '10',
        series: 30,
        series: 40,

    },
    {
        name: '11',
        series: 30,
        series: 67,

    },
    {
        name: '12',
        series: 50,
        series: 60,

    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

    render() {
        return (
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Tooltip />
                    <Bar dataKey="series" stackId="a" fill="#5D92F4" />
                    <Bar dataKey="series" stackId="a" fill="#F4F7FA" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
