import './App.css';
import Todo from './components/Todo'
import Title from './components/Title';
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div className='todo__wrapper'>
      <Todo title="Finish Fronted Simplified"
      paragraph="Code along with frontend simplified step by step." />
      <Todo title="Finish Interview Section"
      paragraph="Finish every interview section in the next 6 weeks." />
      <Todo title="Land a $100k Job"
      paragraph="Apply to 100 jobs." />
      </div>
      <Modal title="are you sure?"/> 
    </div>
  );
}

export default App;

