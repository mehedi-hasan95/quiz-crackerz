import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from '../../layouts/Main';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const allQuiz = useContext(QuizContext);
    
    return (
        <div>
            <section className="bg-gray-50 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Want to
                            <span className="text-violet-400"> play Quiz</span> with us!!!
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Play quiz with us. Let's evaluate your knowledge</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" to='/topics' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Topics</Link>
                            <Link rel="noopener noreferrer" to='/blog' className="px-8 py-3 text-lg font-semibold border rounded  hover:bg-violet-400 border-violet-400 border-2 transition duration-300">Blog</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://img.freepik.com/free-photo/3d-render-astronaut-with-question-mark-think-disappointment-tired-caucasian-gestures-3d-illustration-design_460848-10707.jpg?w=1380&t=st=1665452851~exp=1665453451~hmac=d70eade8475cd10cb4bf3de2d96f42a61df9fc94aca7e52f84fa007f0464e9c1" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <section>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-7 pb-10">
                {
                    allQuiz.data.map(aq => <Quiz quiz={aq} key={aq.id}></Quiz>)
                }
            </div>
            </section>
        </div>
    );
};

export default Home;