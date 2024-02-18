import React from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";

interface Direction {
  id: number;
  name: string;
}

interface CardListProps {
  directions: Direction[];
}

const CardList: React.FC<CardListProps> = ({ directions }) => {
  return (
    <div className={styles.cardList}>
      {directions.map((direction) => (
        <Card key={direction.id} name={direction.name} />
      ))}
    </div>
  );
};

export default CardList;
