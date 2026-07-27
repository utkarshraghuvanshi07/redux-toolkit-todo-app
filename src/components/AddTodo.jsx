import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from '../features/todos/todosSlice'

export default function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    dispatch(todoAdded(trimmed))
    setText('')
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        className="add-todo__input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="what's on your mind?"
        aria-label="New todo text"
      />
      <button className="btn-add" type="submit">
        add ＋
      </button>
    </form>
  )
}
