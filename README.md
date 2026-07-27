# 🚀 TaskList – Redux Toolkit Todo Application

A modern Todo application built with **React**, **Redux Toolkit**, and **Vite** to understand state management in React applications.

## 📌 Project Overview

This project demonstrates how Redux Toolkit simplifies state management by organizing application logic into a centralized store and feature-based slices.

The application allows users to:

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 🔍 Filter tasks (All / Active / Completed)
- 🧹 Clear completed tasks

---

## 🛠 Tech Stack

- React
- Redux Toolkit
- React Redux
- Vite
- CSS

---

## 📂 Project Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── todos/
│       └── todosSlice.js
│
├── components/
│   ├── AddTodo.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 Redux Toolkit Concepts Used

### configureStore()
Creates the Redux Store that holds the application's global state.

### createSlice()
Creates reducers and actions together, reducing boilerplate code.

### Actions
Actions describe what happened in the application.

### Reducers
Reducers update the state based on dispatched actions.

### useDispatch()
Used to dispatch actions from React components.

### useSelector()
Used to read data from the Redux Store.

---

## 🔄 Redux Data Flow

User Action

↓

dispatch(action)

↓

Reducer updates State

↓

Redux Store Updates

↓

useSelector receives new State

↓

React UI Re-renders

---

## 🚀 Installation

```bash
npm install
npm run dev
```

---

## 🌐 Build

```bash
npm run build
```

---

## 📖 What I Learned

- Global State Management
- Redux Store
- Redux Toolkit
- Slices
- Reducers
- Actions
- React Redux Hooks
- State Flow
- Feature-based Folder Structure

---

## 🙌 Acknowledgement

Built as part of the **Redux Toolkit Self-Learning Mini Hackathon** by **Sheryians Coding School**.