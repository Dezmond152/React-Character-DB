import { useState } from "react";
import "./menu.scss";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function turnOn() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="menu">
      <div className="create-button-wrap">
        <button className={`create-button ${isMenuOpen ? "borderless" : ""}`} onClick={turnOn}>
          <img src="../images/create-cross.svg" alt="#" />
          <span>Create</span>
        </button>

        <div className={`create-drop-menu ${isMenuOpen ? "opened" : "closed"}`}>
          <button onClick={()=>console.log('create')} >Create Card</button>
          <button onClick={()=>console.log('import')} >Import Card</button>
        </div>
      </div>
    </div>
  );
}
