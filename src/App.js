import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import './public/css/main.css'
import { store } from './redux/store';
import { TodoListToolkit } from './components/TodoListToolkit';

function App() {
  return (
    <Provider store={store}>
        <TodoListToolkit/>
    </Provider>
    
  );
}

export default App;
