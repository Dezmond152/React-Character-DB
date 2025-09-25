import "./edit-menu.scss";
import { useContext, useState } from "react";
import { editMenuContext } from "../../src/editMenuContext";

export default function EditMenu() {
  const { showEditMenu, setShowEditMenu } = useContext(editMenuContext);

  function dataEntered() {
    setShowEditMenu(!showEditMenu);
  }

  function createCard() {
    // setCardState(!cardState)
  }

  return (
    <div className="edit-menu-overlay" onClick={dataEntered}>
      <div className="edit-menu" onClick={(e) => e.stopPropagation()}>
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
            <input
              type="button"
              className="send-button"
              value="Enter"
              onClick={() => {
                dataEntered(), createCard();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
