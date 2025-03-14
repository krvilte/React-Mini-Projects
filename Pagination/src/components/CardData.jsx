import React from "react";

function CardData({ title, image, price }) {
  return (
    <div className="product">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>

      <div className="info">
        <h2>{title}</h2>
        <small>{price}</small>
      </div>
    </div>
  );
}

export default CardData;
