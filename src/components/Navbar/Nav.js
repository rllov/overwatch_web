import React from "react";
import "../../fonts.css";
import "./Nav.css";

import GroupsIcon from "@mui/icons-material/Groups";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const Nav = () => {
  return (
    <>
      <div className="nav_container">
        <div className="title_container">
          <p className="title">OVERWATCH</p>
          <p className="titleFor2">2</p>
        </div>
        <div className="topRight_container">
          <div className="userProfile_container">
            <div className="imageProfile">
              <img src="/overwatch_web/images/LucioIcon.png" />
            </div>
            <div className="userProfile">User</div>
          </div>
          <div className="socials">
            <GroupsIcon fontSize="large" />
          </div>
          <div className="challenges">
            <MilitaryTechIcon fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
