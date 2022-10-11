import React from 'react';

const MCQ = ({ qst, handleClick }) => {

    return (
        <div>
            <label>
                <h2  className='bg-gray-200 px-8 py-6 text-xl cursor-pointer rounded-full transition duration-1000 hover:bg-violet-400'>
                    <input className=' h-5 w-5 mr-3' type="radio" name="" id="" onClick={() => handleClick(qst)}/> {qst}
                </h2>
            </label>
        </div>
    );
};

export default MCQ;