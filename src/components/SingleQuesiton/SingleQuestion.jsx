import React from 'react';
import MCQ from '../MCQ/MCQ';

const SingleQuestion = ({ qus }) => {
    const { question, options } = qus;
    return (
        <div className='bg-violet-200 mb-10 p-5'>
            <h2 className='text-2xl pb-4'>{question}</h2>
            <h2 className='grid grid-cols-2 gap-5'>
                {
                    options.map(qst => <MCQ qst={qst}></MCQ>)
                }
            </h2>
        </div>
    );
};

export default SingleQuestion;