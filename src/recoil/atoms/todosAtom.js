import { atom } from "recoil";


const initialTodos = () => {
  return JSON.parse( window.localStorage.getItem("todos") 
  ? window.localStorage.getItem("todos") 
  : "[]" 
  )
}

const todoState = atom({
  key: "todos",
  default: initialTodos()
});

export default todoState;
