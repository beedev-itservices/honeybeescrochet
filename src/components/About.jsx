import React from "react";
import { Link, useHistory } from "react-router-dom";

function About(props) {
  const { push, goBack } = useHistory();
  console.log(props);
  return (
    <div className="about-wraper">
      <button onClick={() => goBack()}>Go Back</button>
    </div>
  );
}

export default About;
