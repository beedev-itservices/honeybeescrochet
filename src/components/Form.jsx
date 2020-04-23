import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./../App.css";

function Form(props) {
  const { push, goBack } = useHistory();
  console.log(props);
  return (
    <div className="form-wrapper">
      <button onClick={() => goBack()}>Go Back</button>
      <div className="form-items">
        <form action="https://formspree.io/mdolqlyl" method="POST" className="the-form">
        <label>
          <p>Full Name *: </p>
          <input type="text" />
        </label>
        <label>
          <p>Full Name *: </p>
          <input type="text" />
        </label>
        <label>
          <p>Phone Number (optional): </p>
          <input type="text" />
        </label>
        <label>
          <p>Item SKU or name: </p>
          <input type="text" />
        </label>
        <label>
          <p>Colors: </p>
          <input type="text" />
        </label>
        <label>
          <p>Anything Else?: </p>
          <input type="text" />
        </label>
      </form>
      </div>
    </div>
  );
}

export default Form;
