import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import "./index.css";

const ArchieveVehicle = ({ label, handleArchiveClose, Archivehandle }) => {
  return (
    <div className="archieve">
      <div className="archieve-label">{label}</div>
      <div className="archieve-buttons">
        <Buttons label="No" onClick={handleArchiveClose} />
        <Buttons label="Yes" onClick={Archivehandle} />
      </div>
    </div>
  );
};

export default ArchieveVehicle;
