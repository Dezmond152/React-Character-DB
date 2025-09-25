import "./main-section.scss";
import cardPresets from "../../cards_data/cardPresets.json"; 
import Card from "/components/Card/Card.jsx";
import EditMenu from "/components/EditMenu/EditMenu.jsx";
import { useContext } from "react";
import { editMenuContext } from "../../src/editMenuContext";

export default function MainSection() {
  const { showEditMenu } = useContext(editMenuContext);

  return (
    <div className="main-section">
      {showEditMenu && <EditMenu />}
      <div className="card-wrap">

        {cardPresets.map((item, i) => (
          <Card
            key={i}
            name={item.name}
            surname={item.surname}
            tags={item.tags}
            link={item.link}
            img={item.img}
          />
        ))}
        
      </div>
    </div>
  );
}
