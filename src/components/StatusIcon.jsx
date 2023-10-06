import React from "react";

const StatusIcon = ({ status, statusIcons }) => {
  return (
      <img
        src={statusIcons[status]}
        // alt={status}
        alt=""
        style={{
          marginTop: "0.2rem",
          width: "14px",
          height: "14px",
          marginRight: "0.3rem",
        }}
      />
  );
};

export default StatusIcon;
