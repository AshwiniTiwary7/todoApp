import './App.css';
import TodoAdd from './component/TodoAdd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <TodoAdd />
      <ToastContainer />
    </>
  );
}

export default App;
