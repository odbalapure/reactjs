import classses from "./Card.module.css";

function Card(props) {
  return <div className={classses.card}>{props.children}</div>;
}

export default Card;
