import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const DashBoard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        fetch('chart.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, [])
    return (
        <div className='container mt-5 d-flex '>

            <div className='me-5 col-md-6'>

                <LineChart width={400} height={500} data={charts}>
                    <Line dataKey='sell' fill='#8884d8'></Line>
                    <XAxis dataKey='month'></XAxis>
                    <Tooltip />
                    <Legend />
                    <YAxis></YAxis>


                </LineChart>
                <h4>Line Chart</h4>
            </div>

            <div className='ms-5 col-md-6' >
                <BarChart width={400} height={500} data={charts} >
                    <Bar dataKey='investment' fill='#8884d8'></Bar>
                    <Bar dataKey='revenue' fill="#82ca9d"></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip />
                    <Legend />
                    <YAxis></YAxis>




                </BarChart>
                <h4>Bar Chart</h4>
            </div>




        </div>
    );
};

export default DashBoard;