import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoToggled, todoEdited, todoDeleted } from '../features/todos/todosSlice'

export default function TodoItem({ todo, accent }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  const saveEdit = () => {
    const trimmed = draft.trim()
    if (trimmed) dispatch(todoEdited({ id: todo.id, text: trimmed }))
    else setDraft(todo.text)
    setIsEditing(false)
  }

  return (
    <li
      className={`card${todo.completed ? ' card--done' : ''}`}
      style={{ '--accent': accent }}
    >
      <button
        className="card__check"
        onClick={() => dispatch(todoToggled(todo.id))}
        aria-label={todo.completed ? 'Mark as not done' : 'Mark as done'}
      >
        {todo.completed ? '✓' : ''}
      </button>

      {isEditing ? (
        <input
          className="card__edit-input"
          value={draft}
          autoFocus
          onChange={(e) => setDraft(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveEdit()
            if (e.key === 'Escape') {
              setDraft(todo.text)
              setIsEditing(false)
            }
          }}
        />
      ) : (
        <span className="card__text" onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}

      <div className="card__actions">
        <button className="icon-btn" onClick={() => setIsEditing(true)} aria-label="Edit">
          ✎
        </button>
        <button
          className="icon-btn icon-btn--danger"
          onClick={() => dispatch(todoDeleted(todo.id))}
          aria-label="Delete"
        >
          ✕
        </button>
      </div>
    </li>
  )
}
