import React from 'react';
import MCQ from '../MCQ/MCQ';

const SingleQuestion = ({ qus }) => {
    const { question, options, correctAnswer } = qus;


    // Click handaler
    const handleClick = (id) => {
        if(id === correctAnswer) {
            console.log("Right");
        } else {
            console.log('Wrong');
        }
    }
    return (
        <div className='bg-violet-200 mb-10 p-5'>
            <h2 className='text-2xl pb-4 font-semibold'>{question}</h2>
            <h2 className='grid grid-cols-2 gap-5'>
                {
                    options.map((qst, idx) => <MCQ qst={qst} key={idx} handleClick={handleClick}></MCQ>)
                }
            </h2>
        </div>
    );
};

export default SingleQuestion;