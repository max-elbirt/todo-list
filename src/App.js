import logo from './logo.svg';
import './App.css';
import { Header } from './header';
import Main from './main';
import Footer from './footer';
import List from './List';
import {useEffect, useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const appTitle = "ToDoApp";

  const addToDo = (title) => {
    const newTodos = todos.concat({title, completed: false, key: Date.now()});
    setTodos(newTodos);
    console.log(newTodos);
  }

  const removeToDo = (toDoToRemoveName) => {
    console.log("removing");
    const newTodos = todos.filter(todo => todo.title !== toDoToRemoveName);
    setTodos(newTodos);
    }

  const MarkAsCompleted = (todo) => {
    setTodos([...todos]);
  }

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    console.log(newTodos);
    setTodos(newTodos);
  }

  const toggleAll = (checkedValue) => {
    const newTodos = todos.map(todo => ({...todo, completed: checkedValue}));
    console.log(newTodos);
    setTodos(newTodos);
  }

  return (

        <section class="todoapp">

            <Header items= {appTitle}
              text= "what needs to be done"
              onAddItem={addToDo}
              />

            <Main items= {todos}
             onRemoveToDo={removeToDo}
             onMarkCompleted={MarkAsCompleted} 
             onToggleAll={toggleAll}/>

            <Footer
            itemLeftCount = {count}
            onClearCompleted={clearCompleted}/>

        </section>

      )}

      
export default App;
