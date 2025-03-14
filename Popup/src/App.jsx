import { useState } from "react";
import Popup from "./components/Popup";
import "./App.css";

function App() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      {!openPopup && (
        <button
          onClick={() => setOpenPopup(true)}
          style={{ backgroundColor: "#fff", color: "#000" }}
        >
          Open Popup
        </button>
      )}

      <Popup popupState={openPopup} setOpenPopup={setOpenPopup} />
    </>
  );
}

export default App;
