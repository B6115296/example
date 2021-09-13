import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import todoState from "../../recoil/atoms/todosAtom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import generateLayout from "../../utils/generateLayout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const TodosView = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const { setLocalStorage } = useLocalStorage("todos");
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    setLocalStorage(todos);

    let layout = generateLayout(todos.filter((item) => !item.completed));

    setLayout(layout);
  }, [todos]);

  const markComplete = (item) => {
    setTodos((prev) => [
      ...prev.map((todo) => {
        if (todo.id === item.id) {
          return {
            ...todo,
            completed: true
          };
        }
        return todo;
      })
    ]);
  };

  const layouts = {
    lg: layout,
    md: layout,
    sm: layout,
    xs: layout,
    xxs: layout
  };

  return (
    <div>
      <ResponsiveGridLayout
        layouts={layouts}
        onResize={(e) => console.log("layout resized", e)}
        onLayoutChange={(e) => console.log("layout changed", e)}
        breakpoints={{
          lg: 1050,
          md: 850,
          sm: 500,
          xs: 480,
          xxs: 0
        }}
        cols={{
          lg: 12,
          md: 10,
          sm: 6,
          xs: 4,
          xxs: 2
        }}
        onResizeStop={(layout) => console.log(layout)}
      >
        {todos
          .filter((item) => !item.completed)
          .map((item) => {
            return (
              <div key={item.id} className="todo-item">
                <div className="todo-info">
                  {item.title.length > 200
                    ? `${item.title.substr(0, 200)}...`
                    : item.title}
                </div>
                <div className="todo-actions">
                  <div
                    onClick={() => {
                      setTodos((prev) => [
                        ...prev.filter((todo) => todo.id !== item.id)
                      ]);
                    }}
                    className="todo-close"
                  >
                    x
                  </div>
                  <div
                    className="complete-btn"
                    onClick={() => markComplete(item)}
                  >
                    L
                  </div>
                </div>
              </div>
            );
          })}
      </ResponsiveGridLayout>
    </div>
  );
};

export default TodosView;
