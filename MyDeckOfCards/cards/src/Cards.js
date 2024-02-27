import React, { useState } from "react";
import "./Card.css";

//Renders Sinlge Card from deck

function Card ({ name, image}) {
    const [{ angle, xPos, ypPos}] = useState({
        angle: Math.random() * 90 - 45,
        xPos: Math.random() * 40 - 20,
        ypPos: Math.random() * 40 - 20,
    });

    const transform = `translate(${xPos}px, ${ypPos}px) rotate(${angle}deg)`;

    return <img
              className="card"
              alt={name}
              src={image}
              style={{ transform }} 
            />;

}

export default Card;
