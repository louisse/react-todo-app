import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from "./todos";
import "./App.css";

const Home = () => (
  <div style={{ padding: 20 }}>
    <h2>Home View</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
  </div>
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
