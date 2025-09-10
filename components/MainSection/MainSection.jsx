import "./main-section.scss";
import Card from "/components/Card/Card.jsx";
import EditMenu from "/components/EditMenu/EditMenu.jsx";

export default function MainSection() {
  return (
    <div className="main-section">
      
      <EditMenu />

      <div className="card-wrap">
        <Card />
      </div>
    </div>
  );
}
