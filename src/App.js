import "./App.css";
import "./css/Header.css";
import "./css/todo.css";
import "./css/todos.css";
// import "./css/footer.css";
import "./css/addTodos.css";

import Header from "./MyComponents/Header";
// import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./MyComponents/About";
import { NoPage } from "./MyComponents/NoPage";
import { Footer } from "./MyComponents/Footer";

// firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  // firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCMR-MAZ96or-IKVxIvBqA9LIkbauuvshw",
    authDomain: "awesome-todo-2cde9.firebaseapp.com",
    projectId: "awesome-todo-2cde9",
    storageBucket: "awesome-todo-2cde9.appspot.com",
    messagingSenderId: "146291338890",
    appId: "1:146291338890:web:d66b3bae14bfb12bf5c773",
    measurementId: "G-0505BW2VYC",
  };

  // firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title={"Awesome ToDo"} />
        <Routes>
          <Route
            index
            element={[
              <div className="mainContainer">
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </div>,
            ]}
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
