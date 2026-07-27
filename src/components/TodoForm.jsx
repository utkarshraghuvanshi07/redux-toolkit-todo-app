import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: uuidv4(),
        text,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;