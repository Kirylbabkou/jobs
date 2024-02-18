import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }) => {
  return <div className={styles.card}>{name}</div>;
};

export default Card;
