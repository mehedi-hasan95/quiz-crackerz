import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuesiton/SingleQuestion';

const Questions = () => {
    const question = useLoaderData();
    const {name, questions} = question.data
    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl text-center py-10 font-bold'>Quiz of: <span className='text-violet-400'>{name}</span></h2>
            {
                questions.map(qus => <SingleQuestion qus={qus} key={qus.id}></SingleQuestion>)
            }
        </div>
    );
};

export default Questions;