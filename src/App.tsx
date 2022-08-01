import './App.css';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <Todos
        items={['Learing React is fun', 'TypeScript  is the static typing ']}
      />
    </div>
  );
};

export default App;
