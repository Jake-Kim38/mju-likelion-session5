import { useState } from "react";
import "./App.css";
import Main from "./page/Main";
import Modal from "./components/Modal";

function App() {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <Main onShow={setShow} />
      <Modal data={isShow} onShow={setShow} />
    </>
  );
}

export default App;
