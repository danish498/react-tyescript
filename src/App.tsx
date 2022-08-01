import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
  const todos = [new Todo('Learn React'), new Todo('Learn typeScript')];
  console.log(todos);
  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
};

export default App;
