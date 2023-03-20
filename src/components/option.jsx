import React from 'react';

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './option.css';

const Option = (props) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className={`option 
        ${quizState.answered && props.option === props.answer ? 'correct': ""} 
        ${quizState.answered && props.option !== props.answer ? 'incorrect': ""
        }`} 
        onClick={() => props.selectOption()}>
            <p>{props.option}</p>
        </div>
    )
}

export default Option;
