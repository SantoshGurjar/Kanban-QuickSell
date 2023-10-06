import React from "react";

import onlineIcon from "../assets/online.png";
import offlineIcon from "../assets/offline.svg";
import usr_1 from "../assets/usr-1.png";
import usr_2 from "../assets/usr-2.png";
import usr_3 from "../assets/usr-3.png";
import usr_4 from "../assets/usr-4.png";
import usr_5 from "../assets/usr-5.png";


const userr=(userId)=>{
  if(userId==="usr-1"){
    return usr_1
  }
  else if(userId==="usr-2"){
    return usr_2
  }
  else if(userId==="usr-3"){
    return usr_3
  }
  else if(userId==="usr-4"){
    return usr_4
  }
  else if(userId==="usr-5"){
    return usr_5
  }else{
    return null
  }
}
const ProfileIcon = ({ userId, getUserAvailability }) => {
  console.log(userId);
  console.log(`../assests/${userId}.png`);
  return (
      <div style={{ position: "relative" }}>
        <img
          src={userr(userId)}
          // alt="icon"
          alt=""
          style={{
            width: "40px",
            height: "40px",
            marginRight: "1px",
            // marginLeft: "2px",
          }}
        />
        <img
          src={getUserAvailability(userId) ? onlineIcon : offlineIcon}
          alt={getUserAvailability(userId) ? "Online" : "Offline"}
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            top: "32px",
            left: "26px",
          }}
        />
      </div>
  );
};

export default ProfileIcon;
