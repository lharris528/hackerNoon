import './App.css';
import Modal from './Modal.js';
import { useState } from "react";
import { todoList, todo1, todo1Title, todo2, todo2Title, todo3, todo3Title, todo4, todo4Title } from './startingQuestions';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <ToDo />

      </header>
    </div>
  );
}

const ToDo = () => {

  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  //const [newPage, setNewPage] = useState(false);

  let q1 = <div>
    <button onClick={() => {
      setShow(true)
      setText(todo1)
      setTitle(todo1Title)
      // setNewPage(true)
      }}>{todo1Title}</button>
  </div>

  let q2 = <div>
    <button onClick={() => {
      setShow(true)
      setText(todo2)
      setTitle(todo2Title)
      }}>{todo2Title}</button>
  </div>

  let q3 = <div>
    <button onClick={() => {
      setShow(true)
      setText(todo3)
      setTitle(todo3Title)
    }}>{todo3Title}</button>
  </div>

  let q4 = <div>
    <button onClick={() => {
      setShow(true)
      setText(todo4)
      setTitle(todo4Title)
    }}>{todo4Title}</button>
  </div>

  const initialQuestions = []
  initialQuestions.push(q1, q2, q3, q4);
  const [questions, setQuestions] = useState(initialQuestions);

  return (
    <div>
      <div>
        <h4>{todoList}</h4>
      </div>
      <div>
        {questions}
        <Modal onClose={() => setShow(false)} show={show} title={title}>{text}</Modal>
      </div>
      <div className="double-padded">
        <button onClick={() => {
          setShow(true)
          setText(<NewTaskForm initQs={initialQuestions} onClose2={() => setShow(false)}/>)
          setTitle("Your New Task")
        }}>Create New Task</button>
      </div>
    </div>
  )
}










const NewTaskForm = (props) => {

  const [objectiveTitle, setObjectiveTitle] = useState("");
  const [solution, setSolution] = useState("");
  const [incorrect1, setIncorrect1] = useState("");
  const [incorrect2, setIncorrect2] = useState("");
  const [incorrect3, setIncorrect3] = useState("");

  const onSubmit = () => {
    let newObjective = <div>
      <div>
        {objectiveTitle}
      </div>
      <div>
        <div>
          1. {solution}
        </div>
        <div>
          2. {incorrect1}
        </div>
        <div>
          3. {incorrect2}
        </div>
        <div>
          4. {incorrect3}
        </div>
      </div>
    </div>
    console.log(newObjective);
    console.log(objectiveTitle, solution, incorrect1, incorrect2, incorrect3);

    return (
      {newObjective}
    )
  };

  //An attempt to make a function to ensure inputs are required and are filled in
  // const inputFunc = (inputValue inputValueSet) => {
  //   if(inputValue === "") {
  //     event.preventDefault();
  //   }
  //   else {
  //     inputValueSet(event.target.value)
  //   }
  // }


  return (
    <div>
      <div className="padded">
        <label htmlFor="task-title">Main Objective of New Task: </label>
        <input id="task-title" value={objectiveTitle} onChange={event => setObjectiveTitle(event.target.value)}/>
      </div>
      <div className="padded">
        <label htmlFor="task-solution">Solution for Objective: </label>
        <input id="task-solution" value={solution} onChange={event => setSolution(event.target.value)}/>
      </div>
      <div className="padded">
        <label htmlFor="wrong-answer">Now include three potential wrong answers for the objective:</label>
        <div className="centered-collumn padded">
          <input className="margin15" id="wrong-answer" value={incorrect1} onChange={event => setIncorrect1(event.target.value)}/>
          <input className="margin15" value={incorrect2} onChange={event => setIncorrect2(event.target.value)}/>
          <input className="margin15" value={incorrect3} onChange={event => setIncorrect3(event.target.value)}/>
        </div>
        <div>
          <input type="submit" onClick = {() => {onSubmit(); props.onClose2();}} />
        </div>
      </div>
    </div>
  )
}


export default App;

//<Modal title={props.variables.objectiveTitle}>{objectiveText}</Modal>