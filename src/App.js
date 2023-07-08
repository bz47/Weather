import "./App.css";
import { Route, Routes } from "react-router-dom";
import Montevideo from "./components/Montevideo";
import Main from "./components/Main";
import Medellin from "./components/Medellin";
import Rio from "./components/Rio";
import Lima from "./components/Lima";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/Montevideo" element={<Montevideo />}></Route>
      <Route path="/Medellin" element={<Medellin />}></Route>
      <Route path="/Rio" element={<Rio />}></Route>
      <Route path="/Lima" element={<Lima />}></Route>
    </Routes>
  );
}

export default App;
