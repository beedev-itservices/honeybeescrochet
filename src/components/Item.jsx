import React from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import ItemShipping from "./ItemShipping";
import ItemDescription from "./ItemDescription";

function Item(props) {
  const params = useParams();
  const { path, url } = useRouteMatch();
  console.log("url", url);
  const shopItem = props.items.find(item => item.id === Number(params.itemID));
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
          <h4>Description:</h4>
          <p>{shopItem.description}</p>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink to={`/the-shop/${shopItem.id}/shipping`}>
          Click for Shipping information
        </NavLink>
      </nav>
      <Route path={`/the-shop/:itemID/shipping`}>
        <ItemShipping item={shopItem} />
      </Route>
    </div>
  );
}
export default Item;
