import React from "react";
import CardData from "./CardData";

function Card({ Products }) {
  return (
    <div className="products">
      {Products.map((item) => {
        return (
          <CardData
            key={item.id}
            title={item.title}
            image={item.images[0]}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default Card;
