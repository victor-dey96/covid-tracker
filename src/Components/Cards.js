import React, { useState, useEffect } from "react";

import "./Cards.css";

function Cards({ condition, data, style, text }) {
  return (
    // <div className={`${condition === 'deaths'} ? deaths ` }>

    <div className="Cards" style={style}>
      <div className="cards_text">
        <h2>{condition}</h2>
        <h3>{data}</h3>
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export default Cards;
