import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { name, logo, total, id } = quiz;
    return (
        <div className=''>
            <img className='bg-violet-400' src={logo} alt="" />
            <div className="bg-gray-200 py-3 px-2">
                <h2 className='text-2xl font-semibold'>{name}</h2>
                <h4 className='text-xl py-4'>Total Questions: {total}</h4>
                <Link to={`/quiz/${id}`}>
                    <button className='px-8 py-3 text-lg font-semibold border rounded  bg-violet-400 hover:border-violet-400 hover:border-2 hover:bg-transparent transition duration-300'>Attend Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;