import { useState } from "react";

import useModal from "./hooks/useModal";
import Modal from "./modal/DefaultModal";
import "./styles.css";

export default function App() {
  const { isShowing, toggle } = useModal();
  const [message, setMessage] = useState();

  const handleClick = (info: any) => {
    setMessage(info);
    toggle();
  };

  return (
    <div className="App">
      <button onClick={() => handleClick("곰!!!")}>Brown</button>
      <button onClick={() => handleClick("오리!!!")}>Sally</button>
      <Modal isShowing={isShowing} hide={toggle} message={message} />
    </div>
  );
}
