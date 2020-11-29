import React from "react";
import Card from "./Card";

const CardList = ({ cats }) => {
  return (
    <div>
      {cats.map((_, i) => {
        return (
          <Card
            key={i}
            id={cats[i].id}
            breed={cats[i].breed}
            size={cats[i].size}
            hair={cats[i].hair}
            img={cats[i].img}
            wiki={cats[i].wiki}
          />
        );
      })}
    </div>
  );
};

export default CardList;
