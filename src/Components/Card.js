import React from "react";
import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="card">
      {/* image */}
      <img src={image} className="image"></img>

      {/* tour details */}
      <div className="tour-info">
        {/* price and place name */}
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        {/* Discription of place */}
        <div className="discription">
          {description}
          <span className="read-more" onClick={readMoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
      {/* button for not interested */}
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
