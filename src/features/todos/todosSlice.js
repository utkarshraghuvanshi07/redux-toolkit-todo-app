import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: nanoid(), text: 'Read the Redux Toolkit docs', completed: true },
    { id: nanoid(), text: 'Build this todo app', completed: false },
    { id: nanoid(), text: 'Record the explanation video', completed: false },
  ],
}

// createSlice bundles together the reducer function, the action
// creators, and the action types for one "slice" of state — here,
// everything related to todos. Under the hood it uses Immer, so we
// are allowed to write code that looks like it mutates `state`
// directly (state.items.push(...)); Immer turns that into a safe,
// immutable update for us.
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // `prepare` lets us control the shape of the action's payload,
    // so the component only has to pass in the raw todo text.
    todoAdded: {
      reducer(state, action) {
        state.items.unshift(action.payload)
      },
      prepare(text) {
        return { payload: { id: nanoid(), text, completed: false } }
      },
    },
    todoToggled(state, action) {
      const todo = state.items.find((item) => item.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    todoEdited(state, action) {
      const { id, text } = action.payload
      const todo = state.items.find((item) => item.id === id)
      if (todo) todo.text = text
    },
    todoDeleted(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    completedCleared(state) {
      state.items = state.items.filter((item) => !item.completed)
    },
  },
})

export const { todoAdded, todoToggled, todoEdited, todoDeleted, completedCleared } =
  todosSlice.actions

export default todosSlice.reducer

// Selectors: small functions that know how to pull the bits of
// state a component needs. Keeping them here means components
// don't need to know the shape of the state tree.
export const selectAllTodos = (state) => state.todos.items
export const selectActiveCount = (state) =>
  state.todos.items.filter((item) => !item.completed).length
export const selectCompletedCount = (state) =>
  state.todos.items.filter((item) => item.completed).length
