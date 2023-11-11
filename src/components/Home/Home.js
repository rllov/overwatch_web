import React from "react";
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="Options">
          <div className="mainOptions"></div>
          <div className="Play">
            <Link
              to="https://overwatch.blizzard.com/en-us/"
              className="Play_link"
            >
              PLAY
            </Link>
          </div>
          <div className="Heroes">
            <Link to="/Heroes" className="Heroes_link">
              HEROES
            </Link>
          </div>
          <div className="Shop">
            <Link to="/Shop" className="Shop_link">
              SHOP
            </Link>
          </div>
          <div className="Battle_Pass">
            <Link to="/Battle_Pass" className="Battle_Pass_link">
              BATTLE PASS
            </Link>
          </div>
        </div>
        <div className="subOptions">
          <div className="Social">
            <div className="social_text">
              <Link to="/Socials" className="Social_link">
                SOCIAL
                <GroupsIcon fontSize="medium" className="social_icon" />
              </Link>
            </div>
          </div>
          <div className="Career_Profile">
            <Link to="/Career_Profile" className="Career_Profile_link">
              CAREER PROFILE
            </Link>
          </div>

          <div className="Challenges">
            <Link to="/Challenges" className="Challenges_link">
              CHALLENGES
            </Link>
          </div>

          <div className="Progression">
            <Link to="/Progression" className="Progression_link">
              PROGRESSION
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
