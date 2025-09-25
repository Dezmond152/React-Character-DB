import "./App.css";
import Menu from "../components/Menu/Menu.jsx";
import MainSection from "../components/MainSection/MainSection.jsx";
import SearchArea from "../components/SearchArea/SearchArea.jsx";
import { useState } from "react";
import { editMenuContext } from "./editMenuContext.js";

export default function App() {
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [cards, setCards] = useState([]);

  return (
    <editMenuContext.Provider value={{ showEditMenu, setShowEditMenu }}>
      <div className="main-grid">
        <Menu />
        <MainSection />
        <SearchArea />
      </div>
    </editMenuContext.Provider>
  );
}


