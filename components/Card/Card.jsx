import { useState } from "react";
import "./card.scss";

export default function Card() {
  localStorage.setItem("cards", JSON.stringify([{ title: "Test", img: "" }]));
  const cards = JSON.parse(localStorage.getItem("cards"));
  console.log(cards);

  

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src="./images/kobeni.png" draggable="false" alt="#" />
          <div>
            <span>Kobeni Higashiyama</span>
          </div>
        </div>

        <div className="card-back">
          <div className="back-nav-wrap">
            <button>Edit</button>
            <button>Export</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
