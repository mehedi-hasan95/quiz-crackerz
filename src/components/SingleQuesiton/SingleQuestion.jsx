import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
import MCQ from '../MCQ/MCQ';

const SingleQuestion = ({ qus }) => {
    const { question, options, correctAnswer } = qus;
    
    
    // Click handaler
    const handleClick = (id) => {
        if (id === correctAnswer) {
            toast.success('Right Answer', { autoClose: 1000 });
        } else {
            toast.warn('Wrong Answer. Try again!', { autoClose: 1000 });
        }
    }

    // Display the corect Question:
    const showAnswer = (id) => {
        toast.info(`The correct answer is: ${id}`, { autoClose: 3000, });
    }
    
    return (
        <div className='bg-violet-200 mb-10 p-5'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl pb-4 font-semibold'>{question}</h2>
                <button onClick={() => showAnswer(correctAnswer)}><EyeIcon className="h-6 w-6" /></button>
            </div>
            <h2 className='grid grid-cols-2 gap-5'>
                {
                    options.map((qst, idx) => <MCQ qst={qst} key={idx} handleClick={handleClick} showAnswer={showAnswer}></MCQ>)
                }
            </h2>
        </div>
    );
};

export default SingleQuestion;