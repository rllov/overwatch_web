import React from "react";

import "./GameModes.css";

const GameModes = () => {
  return (
    <div className="gamemode_container">
      <div className="game_type_container">
        <div className="unranked_container">
          <div className="unranked_img">
            <img></img>
          </div>
          <div className="gm_title">UNRANKED</div>
          <div className="gm_desc">
            <p>JUMP INTO A GAME AGAINST OTHER PLAYERS OF YOUR SKILL LEVEL.</p>
          </div>
          <div className="unranked_desc"></div>
        </div>
        <div className="competitive_container">
          <div className="competitive_img">
            <img></img>
          </div>
          <div className="gm_title">COMPETITIVE</div>
          <div className="gm_desc">
            <p>COMPETE AGAINST OTHER PLAYERS AND WORK YOUR WAY UP THE RANKS.</p>
          </div>
        </div>
        <div className="arcade_container">
          <div className="arcade_img">
            <img></img>
          </div>
          <div className="gm_title">ARCADE</div>
          <div className="gm_desc">
            <p>NEW GAME MODES! NEW RULES! NEW MAPS! ENTER THE ARCADE.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModes;
