import React from "react";
import CardList from "./CardList/CardList";

const directions = [
  { id: 1, name: "Фронтенд" },
  { id: 2, name: "Бэкэнд" },
  { id: 3, name: "React Native" },
  { id: 4, name: "Android" },
  { id: 5, name: "DevOps" },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Направления в разработке</h1>
      <CardList directions={directions} />
    </div>
  );
};

export default App;
