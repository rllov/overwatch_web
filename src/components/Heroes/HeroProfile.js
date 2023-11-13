import React from "react";
import { useParams } from "react-router-dom";
import "./HeroProfile.css";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const HeroProfile = ({ data }) => {
  const { heroTag } = useParams();
  const hero = data.find((hero) => hero.tag === parseInt(heroTag));

  if (!hero) {
    return <div className="notFound">Error ###: Hero not found</div>;
  }

  return (
    <div className="character_container">
      <div className="character_name">{hero.name}</div>
      <div className="character_breakdown">
        <div className="character_image">
          <img src={hero.characterImage} />
        </div>
        <div className="character_abilities">
          <div className="character_abilities_title">
            <u>Abilities</u>
            <div className="ability_one">
              <img src={`url(${hero.ability1})`}></img>
            </div>
            <div className="ability_two"></div>
            <div className="ability_three"></div>
            <div className="ability_four"></div>
          </div>
        </div>
        <div className="character_info">
          <div className="character_info_title">
            <u>Character Description</u>
          </div>
          <div className="character_real_name">Real Name: {hero.real_name}</div>
          <div className="character_age">Age: {hero.age}</div>
          <div className="character_affiliation">
            Affiliation: {hero.affiliation}
          </div>
          <div className="character_base_ops">
            Based: {hero.base_of_operations}
          </div>
          <div className="character_description">
            Overview: {hero.description}
          </div>
          <div className="character_stats">
            <div className="role_tyle">Role: {hero.type}</div>
            <div className="health">Health: {hero.health}</div>
            <div className="armour">Armor: {hero.armour}</div>
            <div className="shield">Shield Amount: {hero.shield}</div>
          </div>
        </div>
      </div>
      <Button className="back_button">
        <Link to="/Heroes" className="back_button">
          Back
        </Link>
      </Button>
      <Button className="more_info">
        <Link to={`${hero.linkTo}`} target="_blank" className="more_info">
          More Info
        </Link>
      </Button>
    </div>
  );
};

export default HeroProfile;
