import { createContext, useReducer } from "react";
import questions from '../data/questions';

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answered: false
};

const quizReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1]
            };
        case "REORDER_QUESTIONS":
            const reorder = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorder
            };
        case "CHANGE_QUESTION":
            const next = state.currentQuestion + 1;
            let end = false;
            if(!questions[next]){
                end = true;
            }
            return{
                ...state,
                currentQuestion: next,
                gameStage: end? STAGES[2]: state.gameStage,
                answered: false
            };
        case "RESTART":
            return initialState;
        case "CHECK_ANSWER":
            if(state.answered)return state;
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correct = 0;
            if(answer === option) correct = 1;

            return{
                ...state,
                score: state.score + correct,
                answered: option,

            };

        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};