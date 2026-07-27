import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveCount,
  selectCompletedCount,
  completedCleared,
} from './features/todos/todosSlice'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const FILTERS = ['all', 'active', 'completed']

function progressMessage(progress, total) {
  if (total === 0) return 'add your first task ✨'
  if (progress === 100) return 'all done! you\'re unstoppable 🔥'
  if (progress >= 50) return 'more than halfway there 💪'
  if (progress > 0) return 'nice start, keep going 🌱'
  return 'let\'s get into it 👀'
}

export default function App() {
  const [filter, setFilter] = useState('all')
  const dispatch = useDispatch()
  const activeCount = useSelector(selectActiveCount)
  const completedCount = useSelector(selectCompletedCount)
  const total = activeCount + completedCount
  const progress = total === 0 ? 0 : Math.round((completedCount / total) * 100)

  return (
    <div className="page">
      <div className="board">
        <header className="board__header">
          <span className="board__eyebrow">⚡ built with redux toolkit</span>
          <div className="board__heading-row">
            <h1 className="board__title">
              task<span>list.</span>
            </h1>
            <span className="board__badge">{total}</span>
          </div>
          <p className="board__subtitle">{progressMessage(progress, total)}</p>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-label">{progress}% complete</span>
        </header>

        <AddTodo />

        <nav className="filters" aria-label="Filter todos">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filters__btn${filter === f ? ' filters__btn--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </nav>

        <TodoList filter={filter} />

        <footer className="board__footer">
          <span>
            {activeCount} left · {completedCount} done
          </span>
          <button
            className="link-btn"
            onClick={() => dispatch(completedCleared())}
            disabled={completedCount === 0}
          >
            clear completed
          </button>
        </footer>
      </div>
    </div>
  )
}
