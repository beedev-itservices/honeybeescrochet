import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  console.log(history);
  const routeToShop = event => {
    history.push("/the-shop");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="http://honeybeescrochet.com/images/shawl.JPG"
        alt=""
      />
      <button className="md-button shop-button" onClick={routeToShop}>
        Shop now!
      </button>
    </div>
  );
}

export default Home;
