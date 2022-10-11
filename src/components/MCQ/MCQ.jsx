import React from 'react';

const MCQ = ({qst, handleClick}) => {
    
    return (
        <div>
            <h2 onClick={()=> handleClick(qst)} className='bg-gray-200 p-4 text-xl cursor-pointer rounded-full transition duration-1000 hover:bg-violet-400'>{qst}</h2>
        </div>
    );
};

export default MCQ;