import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from "./todos";
import "./App.css";

const Home = () => (
  <>
    <header>
      <div className="container">
        <div className="todo-app-heading">
          <h1 className="todo-app-heading-text">Home View</h1>
        </div>
      </div>
    </header>
    <div className="container">
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
    <footer>
      <div className="container">&copy; Copyright 2024</div>
    </footer>
  </>
);

const NoMatch = () => (
  <>
    <header>
      <div className="container">
        <div className="todo-app-heading">
          <h1 className="todo-app-heading-text">404: Page Not Found</h1>
        </div>
      </div>
    </header>
    <div className="container">
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
    <footer>
      <div className="container">&copy; Copyright 2024</div>
    </footer>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/todo" style={{ padding: 5 }}>
          Todo
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
