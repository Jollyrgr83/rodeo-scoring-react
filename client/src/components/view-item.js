// VIEW-ITEM COMPONENT
// react
import React from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// fontawesome icons
import { faRedo, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function ViewItem({ text, viewUpdate, viewDelete, handleChange }) {
  return (
    <div className="row text-center mx-auto container-row">
      <input className="half mx-auto" type="text" value={text} onChange={handleChange} />
      <div className="square-button text-center mx-auto blue">
        <FontAwesomeIcon icon={faRedo} onClick={viewUpdate} />
      </div>
      <div className="square-button text-center mx-auto red">
        <FontAwesomeIcon icon={faTrashAlt} onClick={viewDelete} />
      </div>
    </div>
  );
}

export default ViewItem;
