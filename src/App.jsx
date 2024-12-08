import { useState } from "react";
import NavBar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>
      <NavBar />
    </div>
  );
}

export default App;
