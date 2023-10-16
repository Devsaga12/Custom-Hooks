import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReduce";

const initState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todos) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todos,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  return {
    todos,
    todosCount: todos.length,
    pendingTodoCount: todos.filter((todos) => !todos.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
