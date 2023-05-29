import { useState } from "react";
import "./App.css";
import Main from "./page/Main";
import Modal from "./components/Modal";
import Board from "./page/Board";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main onShow={setShow} />} />
        <Route path="/boards/:rank" element={<Board onShow={setShow} />} />
      </Routes>
      <Modal data={isShow} onShow={setShow} />
    </>
  );
}

export default App;
