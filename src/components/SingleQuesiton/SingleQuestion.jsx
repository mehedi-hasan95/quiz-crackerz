import React from 'react';
import { toast } from 'react-toastify';
import MCQ from '../MCQ/MCQ';

const SingleQuestion = ({ qus }) => {
    const { question, options, correctAnswer } = qus;


    // Click handaler
    const handleClick = (id) => {
        if(id === correctAnswer) {
            toast.success('Right Answer', {autoClose: 1000});
        } else {
            console.log('Wrong');
            toast.warn('🦄 Wrong Answer. Try again!', { autoClose: 1000});
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