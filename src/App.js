import { Route, Routes } from "react-router-dom";
import "./App.css";
import Rating from "./components/assignment/Rating";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews/:id" element={<Rating />} />
    </Routes>
  );
}

export default App;
