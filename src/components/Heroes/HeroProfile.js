import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HeroProfile.css";

import { Link } from "react-router-dom";
const HeroProfile = ({ data }) => {
  const { heroTag } = useParams();

  const hero = data.find((hero) => hero.tag === parseInt(heroTag));

  if (!hero) {
    return <div>Hero not found</div>;
  }

  return (
    <div>
      <h1 className="profile_name">{hero.name}</h1>
      <p className="description">
        <Link to={`${hero.linkTo}`} target="_blank">
          My Portfolio
        </Link>
      </p>
    </div>
  );
};

export default HeroProfile;
