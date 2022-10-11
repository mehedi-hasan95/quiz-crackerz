import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const question = useLoaderData();
    console.log(question);
    return (
        <div>
            <h2>All Questions</h2>
        </div>
    );
};

export default Questions;