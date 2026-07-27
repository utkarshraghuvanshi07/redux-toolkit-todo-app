import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
} from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />

        <span
          className={
            todo.completed
              ? "line-through text-gray-400"
              : ""
          }
        >
          {todo.text}
        </span>

      </div>

      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;