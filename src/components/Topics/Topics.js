import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Main';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const tquiz = useContext(QuizContext);
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-7 pb-10">
            {
                tquiz.data.map(tq => <Quiz quiz={tq} key={tq.id}></Quiz>)
            }
        </div>
    );
};

export default Topics;