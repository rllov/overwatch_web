import React from "react";
import data from "./HeroesData.json";
import "../../fonts.css";
import "./Heroes.css";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const HeroCard = ({ hero }) => (
  <Link to={`/hero/${hero.tag}`} key={hero.tag} className="hero-card-link">
    <img
      src={`/overwatch_web/images/character_icons${hero.icon}`}
      style={{ width: "120px", height: "120px" }}
      alt={hero.name}
    />
    <div className="hero_name">
      <h1 className="name">{hero.name}</h1>
    </div>
  </Link>
);
const HeroesByType = ({ data, type }) => {
  const filteredHeroes = data.filter((hero) => hero.type === type);
  return (
    <div>
      <div className="heroes">
        {filteredHeroes.map((hero) => (
          <HeroCard key={hero.tag} hero={hero} />
        ))}
      </div>
    </div>
  );
};

const Heroes = (props) => {
  return (
    <>
      <div className="heroes_container">
        <div className="tank_container">
          <div className="type_title">TANK</div>
          <div className="heroes_icon_container">
            <HeroesByType data={data} type="Tank" />
          </div>
        </div>
        <div className="damage_container">
          <div className="type_title">DAMAGE</div>
          <div className="heroes_icon_container">
            <HeroesByType data={data} type="Damage" />
          </div>
        </div>
        <div className="support_container">
          <div className="type_title">SUPPORT</div>
          <div className="heroes_icon_container">
            <HeroesByType data={data} type="Support" />
          </div>
        </div>
      </div>

      <Button className="back_button">
        <Link to="/" className="back_button">
          Back
        </Link>
      </Button>
    </>
  );
};

export default Heroes;
