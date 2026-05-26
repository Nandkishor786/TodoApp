import { useSelector, useDispatch } from "react-redux";

import { removeTodo, updateTodo } from "../features/todo/todoSlice";

import { MdDeleteForever, MdEdit } from "react-icons/md";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  return (
    <div className="max-w-xl w-full mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        My Todos
      </h1>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No Todos Available</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between
               bg-gray-100 px-4 py-3 rounded-xl shadow
                hover:shadow-lg transition duration-300 w-full"
            >
              <span className="text-lg text-gray-800">{todo.text}</span>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const updatedText = prompt("Enter Updated Todo", todo.text);

                    if (updatedText) {
                      dispatch(
                        updateTodo({
                          id: todo.id,
                          text: updatedText,
                        }),
                      );
                    }
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                >
                  <MdEdit size={22} />
                </button>

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                >
                  <MdDeleteForever size={22} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
