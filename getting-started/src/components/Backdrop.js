function Backdrop(props) {
  function backdropHandler() {
    props.onCloseBackDrop();
  }

  /* 
  close the modal when backdrop is clicked
  we reference "closeModalHandler()" in the Todo component using onCloseBackDrop
  */
  return <div className="backdrop" onClick={backdropHandler} />;

  /* 
  Instead of defining a function and then executing a function passed
  thourgh the props, directly reference it
  */
  // return <div className="backdrop" onClick={props.onCloseBackDrop} />;
}

export default Backdrop;
