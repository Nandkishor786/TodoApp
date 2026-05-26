# Todo App using Redux Toolkit (RTK)

A simple and beginner-friendly Todo Application built using React, Vite, Redux Toolkit, React Redux, and Tailwind CSS.

This project was created for practicing modern Redux Toolkit concepts such as:

* configureStore
* createSlice
* useSelector
* useDispatch
* Global state management
* CRUD operations using Redux Toolkit

---

## Features

* Add Todo
* Update Todo
* Delete Todo
* Global State Management
* Responsive UI using Tailwind CSS
* Unique ID generation using nanoid

---

## Technologies Used

* React
* Vite
* Redux Toolkit (RTK)
* React Redux
* Tailwind CSS
* React Icons

---

## Redux Toolkit Concepts Practiced

### Store

Centralized Redux store using `configureStore()`.

### Slice

Feature-based state management using `createSlice()`.

### Actions

Automatically generated actions using reducers.

### Reducers

Handles state updates such as:

* addTodo
* removeTodo
* updateTodo

### useSelector

Used for accessing Redux state.

### useDispatch

Used for dispatching Redux actions.

---

## Project Structure

```bash
src/
│
├── app/
│   └── store.js
│
├── components/
│   ├── AddTodo.jsx
│   └── Todos.jsx
│
├── features/
│   └── todo/
│       └── todoSlice.js
│
├── App.jsx
└── main.jsx
```

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Nandkishor786/TodoApp
```

Navigate to project folder:

```bash
cd TodoApp
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Redux Flow Used in Project

```bash
Component
   ↓
dispatch(action)
   ↓
Reducer updates state
   ↓
Store updates
   ↓
useSelector gets updated state
   ↓
UI re-renders
```

---

## Learning Outcomes

Through this project, I learned:

* Redux Toolkit fundamentals
* Global state management
* CRUD operations in Redux
* React component architecture
* Tailwind CSS styling
* Modern Redux best practices

---

## Future Improvements

* Add Local Storage persistence
* Add Authentication
* Add RTK Query
* Connect with Backend API
* Add Dark Mode

---

## Author

Nandkishor Pal

MERN Stack Developer

* GitHub: https://github.com/Nandkishor786
* LinkedIn: https://www.linkedin.com/in/nandkishor-pal
