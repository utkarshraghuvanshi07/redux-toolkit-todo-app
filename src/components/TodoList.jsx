import { useSelector } from 'react-redux'
import { selectAllTodos } from '../features/todos/todosSlice'
import TodoItem from './TodoItem'

const ACCENTS = ['#6c5ce7', '#ff5fa2', '#a4e000']

export default function TodoList({ filter }) {
  const todos = useSelector(selectAllTodos)

  const visible = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  if (visible.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-state__emoji">🎈</span>
        <p>nothing here yet — add your first task above</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {visible.map((todo, i) => (
        <TodoItem key={todo.id} todo={todo} accent={ACCENTS[i % ACCENTS.length]} />
      ))}
    </ul>
  )
}
