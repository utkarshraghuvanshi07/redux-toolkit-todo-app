import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-2">🚀 TaskFlow</h1>

        <p className="text-center text-gray-500 mb-8">
          Organize your tasks with Redux Toolkit
        </p>

        <TodoForm />
        <SearchBar />
        <FilterButtons />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
