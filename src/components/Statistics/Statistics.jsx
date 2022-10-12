import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Main';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = useContext(QuizContext);

    return (
        <div className='container mx-auto bg-violet-50 my-2'>
            <h2 className='text-center text-2xl text-violet-400 font-bold py-5'>Statistics</h2>

            <LineChart width={500} height={400} data={data.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <YAxis />
                <Tooltip />
                <Legend />
                <XAxis dataKey="name" />
            </LineChart>
        </div>
    );
};

export default Statistics;