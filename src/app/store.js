import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'

// The store is the single source of truth for our app's state.
// configureStore() from Redux Toolkit sets up the store with good
// defaults (Redux DevTools support, the thunk middleware, etc.)
// so we don't have to wire that up by hand.
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})
