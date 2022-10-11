import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuesiton/SingleQuestion';

const Questions = () => {
    const question = useLoaderData();
    const {name, questions} = question.data
    return (
        <div>
            <h2>Quiz of: {name}</h2>
            {
                questions.map(qus => <SingleQuestion qus={qus} key={qus.id}></SingleQuestion>)
            }
        </div>
    );
};

export default Questions;