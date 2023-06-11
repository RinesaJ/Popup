import React, { useState } from "react";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
      Show popup</button>

      {modal && (
        <div className="container">
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h3>Theme Color</h3>
            <ul>
              <li>Font Color
              <span class="ncolors">#444444 </span>
              <span class="ncolors"></span>
              <input type = 'color' value='#444444' className="color"></input>
              </li>
              <li>Background Color
              <span class="ncolors">#FFFFFF </span>
              <input type = 'color' value='#FFFFFF' className="color"></input>
              </li>
              <li>Button Color
                <span class="ncolors">#2072EF </span>
              <input type = 'color' value='#2072EF ' className="color"></input>
              </li>
              <li>Button Border Color
              <span class="ncolors">#2072EF </span>
              <input className="color" type = 'color' value='#2072EF ' ></input>
              </li>
              <li>Buttons Mouseover Color
              <span class="ncolors">#0052D1 </span>
              <input type = 'color' value='#0052D1' className="color"></input>
              </li>
            </ul>
            <p className="change-modal">Change Theme</p>

            <button className="cancel-modal" onClick={toggleModal}>Cancel</button>
            <button className="save-modal">Save</button>
          </div>
        </div>
        </div>
      )}
     </>
  );
}
export default Modal;