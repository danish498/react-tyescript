import React from 'react';
import Todo from '../models/todo';
import TodoItems from './TodoItems';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItems key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
