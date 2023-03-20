import React from 'react'

import './welcome.css'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Welcome = () => {
    //quizState pega os valores, dispatch altera os valores
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id="welcome">
            <h2>Seja bem-vinda(o)!</h2>
            <p>Clique no botão abaixo para iniciar</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        </div>
  )
}

export default Welcome;
