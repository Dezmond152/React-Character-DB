import "./menu.scss";
import { useState, useContext } from "react";
import { editMenuContext } from "../../src/editMenuContext";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setShowEditMenu } = useContext(editMenuContext);

  function turnOn() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="menu">
      <div className="create-button-wrap">
        <button
          className={`create-button ${isMenuOpen ? "borderless" : ""}`}
          onClick={turnOn}
        >
          <img src="../images/create-cross.svg" alt="#" />
          <span>Create</span>
        </button>

        <div className={`create-drop-menu ${isMenuOpen ? "opened" : "closed"}`}>
          <button onClick={() => setShowEditMenu(true)}>Create Card</button>
          <button onClick={() => console.log("import")}>Import Card</button>
        </div>
      </div>
    </div>
  );
}
