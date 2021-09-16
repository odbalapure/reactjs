import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  /* 
  useState is a hook that can be called directly inside a function component 
    useState returns a state and a function to change the state
  */
  const [isModalOpen, setModalOpen] = useState(false);

  /* Modal should open when "Delete" is clicked */
  function deleteHandler() {
    setModalOpen(true);
  }

  /* Modal should close when "Cancel" or "Backdrop" is clicked */
  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <button className="btn" onClick={deleteHandler}>
        Delete
      </button>
      {/* { <Backdrop /> ? isModalOpen : null }  */}

      {/* We pass "closeModalHandler()" and "closeModalHandler()" and execute them in Modal component*/}
      {/* 'onCloseBackDrop' and 'onCloseModal' are user defined props, they store the reference to the above functions */}
      {isModalOpen && <Backdrop onCloseBackDrop={closeModalHandler} />}
      {isModalOpen && <Modal onCloseModal={closeModalHandler} />}
    </div>
  );
}

export default Todo;
