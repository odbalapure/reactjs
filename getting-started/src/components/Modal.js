function Modal(props) {
  /* close the modal when Cancel button is clicked */
  function cancelHandler() {
    props.onCloseModal();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      {/* <button className="btn btn--alt" onClick={props.onCloseModal}>Cancel</button> */}
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
