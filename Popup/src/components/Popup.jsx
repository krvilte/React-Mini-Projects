import React from "react";

function Popup({ popupState, setOpenPopup }) {
  return (
    <>
      {popupState && (
        <div className="popup">
          <h1>This is website popup</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            explicabo in quo itaque est minima, voluptatem tempora quas, natus
            dignissimos, saepe maiores assumenda ipsam quasi obcaecati commodi
            consequatur? Esse, debitis!
          </p>
          <button onClick={() => setOpenPopup(false)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Popup;
