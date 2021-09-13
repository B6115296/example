import React, { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import todoState from "../../recoil/atoms/todosAtom";
import TodosView from "./TodosView";
import CompletedTodos from "./completedTodos";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "@reach/router";
import settingsState from "../../recoil/atoms/settings";
import Button from "@atlaskit/button";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [, setSettings] = useRecoilState(settingsState);
  const input = useRef(null);
  const { setLocalStorage } = useLocalStorage("todos");

  useEffect(() => {
    input.current.focus();
    const getT = async () => {
      let data1 = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await data1.json();

      let datas = data.map((data) => ({
        ...data,
        layout: {},
        newLayout: false
      }));
      setTodos(datas);
    };
    getT();
  }, []);

  const addTodo = () => {
    if (input.current.value.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          title: input.current.value,
          completed: false,
          newLayoutFlag: false,
          newLayout: {}
        }
      ]);

      setSettings((prev) => ({
        ...prev,
        currRoute: 2
      }));

      setLocalStorage(todos);
    }
  };

  return (
    <div className="todos-container">
      <div style={{ textAlign: "right", padding: "5px 30px" }}>
        <Link to="/notes">Go to Notes</Link>
      </div>
      {todos.filter((item) => item.completed === false).length !== 0 && (
        <div className="tasks-left">
          <h5>Tasks left: </h5>
          <div>{todos.filter((item) => item.completed === false).length}</div>
        </div>
      )}
      <h3>Add Todo</h3>
      <Button>Helo</Button>
      <input
        className="todo-input"
        placeholder="Type your todo here"
        ref={input}
        onKeyPress={(e) => {
          if (e.key === "Enter") addTodo();
        }}
      />
      <button onClick={addTodo}>ADD</button>
      <TodosView />
      <CompletedTodos />
    </div>
  );
};

export default Todos;
