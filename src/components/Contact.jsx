import React from "react";
import { Link, useHistory } from "react-router-dom";

function Contact(props) {
  const { push, goBack } = useHistory();
  console.log(props);
  return (
    <div className="contact-wraper">
      <button onClick={() => goBack()}>Go Back</button>
      <div className="contact-items">
        <h1>Contacting HoneyBee's Crochet:</h1>
        <ul>
          <li>
            <b>Email: </b><a href="mailto:honeybee@honeybeescrochet.com">honeybee@honeybeescrochet.com</a>
          </li>
          <li>
            <b>Chat: </b><a href="https://tawk.to/chat/5c04089140105007f37aa009/default">Click to chat</a>
          </li>
          <li>
            <b>Phone: </b>570-221-9892
          </li>
          <li>
            <b>Facebook: </b><a href="https://www.facebook.com/honeybeescrochet">Click for Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
