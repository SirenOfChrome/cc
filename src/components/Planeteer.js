import React, { useState } from "react";

const Planeteer = (props) => {
  const { planeteer } = props;
  const { name, bio, twitter, based, quote } = planeteer;
  const [showBio, setShowBio] = useState(true);

  const location = based === "USA" ? "USA-based" : "Working overseas";

  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div className="Planeteer">
      <img onClick={toggleBio} src={planeteer.image} alt={name} />
      <h2>{name}</h2>
      {showBio ? <p>{bio}</p> : <p>{quote}</p>}
      <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
      <p>{location}</p>
    </div>
  );
};

export default Planeteer;
