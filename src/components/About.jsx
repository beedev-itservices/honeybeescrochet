import React from "react";
import { Link, useHistory } from "react-router-dom";

function About(props) {
  const { push, goBack } = useHistory();
  console.log(props);
  return (
    <div className="about-wraper">
      <button onClick={() => goBack()}>Go Back</button>
      <div className="about-header">
        <img
          className="about-image"
          src="http://images.craftsnherbs.com/crochet/melissa.png"
          alt=""
        />
        <div className="about-owner">
          <p />
          <h2>About the Owner</h2>
          <p>I'm HoneyBee, Greek for Melissa.</p>
          <p>I love making amazing things with yarn and a hook</p>
        </div>
      </div>
      <div className="about-owner">
        <p>
          I have been crocheting since I was 7 years old so at this point over
          30 years. I love making things for not just myself but others.
        </p>
        <p>
          I do seem to have a preferance for small projects or projects that
          require peices making them larger.
        </p>
      </div>
    </div>
  );
}

export default About;
