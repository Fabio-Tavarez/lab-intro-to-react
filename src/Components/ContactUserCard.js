import React from "react";
import Image from "../profile.png";

function ContactUserCard() {
  return (
    <div className="ContactUserCard">
      <img src={Image} alt="" width="50" height="50" />
      <h2>Jordan Walke</h2>
      <p>React Creator</p>
      <p>Lorem Ipsem</p>
    </div>
  );
}

export default ContactUserCard;
