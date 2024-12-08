import { useState } from "react";
import NavBar from "./components/Navbar";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
