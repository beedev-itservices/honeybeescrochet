import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./../App.css";

function Form(props) {
  const { push, goBack } = useHistory();
  console.log(props);
  const handleSubmit = () => {
  };
  return (
    <div className="form-wrapper">
      <button onClick={() => goBack()}>Go Back</button>
      <div className="form-items">
        <form action="https://formspree.io/mdolqlyl" method="POST" className="the-form">
        
        <button onSubmit={() => handleSubmit()}>Submit!</button>
      </form>
      </div>
    </div>
  );
}

export default Form;
