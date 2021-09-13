import React from "react";
import { useRecoilState } from "recoil";
import todoState from "../../recoil/atoms/todosAtom";
import useLocalStorage from "../../hooks/useLocalStorage";

const CompletedTodos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const {setLocalStorage} = useLocalStorage("todos");

  return (
    <div className="c-todos">
      {todos.map(item => {
        if (item.completed) {
          console.log("item,", item);
          return (
            <div key={item.id} className="todo-item comleted">
              <div className="todo-info">{item.title}</div>
              <div className="todo-actions">
                <div
                  onClick={() => {
                    setTodos(prev => [
                      ...prev.filter(todo => todo.id !== item.id)
                    ]);

                    setLocalStorage(todos);
                  }}
                  className="todo-close"
                >
                  x
                </div>
                
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CompletedTodos;
