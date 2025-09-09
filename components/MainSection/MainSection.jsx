import "./main-section.scss";
import Card from "/components/Card/Card.jsx";

export default function MainSection() {
  return (
    <div className="main-section">
      <div className="edit-menu-overlay">
        <div className="edit-menu">
          <div className="edit-menu-wrap">
            <div className="content-top">
              <div className="card-image">
                <div class="input-label">Upload image</div>
                <div className="upload-zone">
                  <input type="file" name="" id="card-img-input" />
                </div>
                
              </div>

              <div className="card-full-name">
                <div className="name"></div>
                <div className="surname"></div>
              </div>
            </div>
            <div className="content-bot"></div>
          </div>
        </div>
      </div>

      <div className="card-wrap">
        <Card />
      </div>
    </div>
  );
}
