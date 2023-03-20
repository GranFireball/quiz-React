
import { useEffect,useContext} from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/welcome';
import Question from './components/question';
import Gameover from './components/gameover';

import './App.css';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    dispatch({type:"REORDER_QUESTIONS"});
  }, [])

  return (
    <div className="App">
      <h1>Quiz</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <Gameover/>}
    </div>
  );
}

export default App;
