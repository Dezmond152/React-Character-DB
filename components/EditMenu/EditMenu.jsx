import "./edit-menu.scss";

export default function EditMenu() {
  return (
    <div className="edit-menu-overlay">
      <div className="edit-menu">
        <div className="edit-menu-wrap">
          <div className="content-top">
            <div className="card-image">
              <div className="input-label">Upload image</div>
              <div className="upload-zone">
                <input type="file" name="" id="card-img-input" />
              </div>
            </div>

            <div className="card-full-name">
              <div className="name">
                <input type="text" placeholder="Name..." />
              </div>
              <div className="surname">
                <input type="text" placeholder="Surname..." />
              </div>
              <div className="tags">
                <input type="text" placeholder="Tags..." />
              </div>
            </div>
          </div>
          <div className="content-bot">
            <textarea className="description"></textarea>
            <input type="button" className="send-button" value="Enter" />
          </div>
        </div>
      </div>
    </div>
  );
}
