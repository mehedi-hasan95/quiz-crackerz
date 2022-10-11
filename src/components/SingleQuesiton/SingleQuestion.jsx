import React from 'react';

const SingleQuestion = ({qus}) => {
    console.log(qus);
    const {question, options} = qus;
    console.log(options[0]);
    return (
        <div>
            <h2>{question}</h2>
        </div>
    );
};

export default SingleQuestion;