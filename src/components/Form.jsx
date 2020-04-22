import React from "react";
import { Link, useHistory } from "react-router-dom";

function Form(props) {
  const { push, goBack } = useHistory();
  console.log(props);
  return (
    <div className="form-wraper">
      <button onClick={() => goBack()}>Go Back</button>
      <div className="form-items">
        <h1>Contacting HoneyBee's Crochet:</h1>
        <ul>
          <li>
            <b>Email: </b>honeybee@honeybeescrochet.com
          </li>
          <li>
            <b>Chat: </b>
          </li>
          <li>
            <b>Phone: </b>
          </li>
          <li>
            <b>Facebook: </b>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Form;
