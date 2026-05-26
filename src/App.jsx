import "./App.css";

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  return (

    <div
      className="h-screen flex flex-col
      items-center bg-black p-10"
    >

      <h1
        className="text-6xl text-red-500
        font-bold mb-10"
      >
        Todo App
      </h1>

      <AddTodo />

      <Todos />

    </div>

  );
}

export default App;