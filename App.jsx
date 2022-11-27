import './App.css';
import Todo from './components/Todo'
import Title from './components/Title';
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </div>
      <div className='todo__wrapper'>
      <Todo title="Finish Fronted Simplified" />
      <Todo title="Finish Interview Section" />
      <Todo title="Land a $100k Job" />
      </div>
      <Modal title="are you sure?"/>
    </div>
  );
}

export default App;

