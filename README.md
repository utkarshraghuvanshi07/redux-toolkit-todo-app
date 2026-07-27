# Ledger — a Redux Toolkit Todo App

A small todo app built to practice Redux Toolkit: add, edit, complete, delete,
and filter todos, all backed by a single slice of Redux state.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for deployment (e.g. Vercel):

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Deploying to Vercel: push this folder to a GitHub repo, import it in Vercel,
and use the defaults (Vite auto-detected, build command `npm run build`,
output directory `dist`).

## How the pieces map to Redux Toolkit concepts

| File | Concept |
|---|---|
| `src/app/store.js` | The **store** — created with `configureStore()`, the single source of truth for app state. |
| `src/features/todos/todosSlice.js` | A **slice** — created with `createSlice()`. Bundles the reducer, action creators, and action types for the `todos` state in one place. |
| `todoAdded`, `todoToggled`, `todoEdited`, `todoDeleted`, `completedCleared` | **Actions** — plain objects describing "what happened," generated automatically by `createSlice`. |
| The functions inside `reducers: {}` | **Reducers** — functions that decide how state changes in response to an action. Thanks to Immer (built into Redux Toolkit), they're written as if mutating `state` directly, but the actual update is immutable. |
| `selectAllTodos`, `selectActiveCount`, `selectCompletedCount` | **Selectors** — functions that read specific pieces of data out of the store. |
| `useDispatch()` in `AddTodo.jsx` / `TodoItem.jsx` | Sends actions to the store to trigger a state update. |
| `useSelector()` in `TodoList.jsx` / `App.jsx` | Reads state from the store and re-renders when the selected data changes. |
| `<Provider store={store}>` in `main.jsx` | Makes the store available to every component in the tree via React context. |

### Data flow in one line

UI event → component calls `dispatch(action)` → the slice's reducer computes
new state → the store updates → any component using `useSelector` on that
data re-renders automatically.

## Folder structure

```
src/
  app/
    store.js            # configureStore()
  features/
    todos/
      todosSlice.js      # createSlice: reducers, actions, selectors
  components/
    AddTodo.jsx
    TodoItem.jsx
    TodoList.jsx
  App.jsx
  main.jsx               # <Provider store={store}>
  index.css
```

## Features implemented

- **Add** — type in the input and submit.
- **Update** — double-click a todo's text (or use the ✎ button) to edit it inline; toggle the circle to mark complete/incomplete.
- **Delete** — the ✕ button removes a todo; "Clear completed" removes all done items at once.
- **Display** — the list re-renders from the store automatically; filter by All / Active / Completed.
