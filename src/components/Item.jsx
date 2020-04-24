import React from "react";
import { useParams, useRouteMatch, Route, NavLink, Link, useHistory } from "react-router-dom";
import ItemShipping from "./ItemShipping";
import ItemDescription from "./ItemDescription";

function Item(props) {
  const params = useParams();
  const { push, goBack } = useHistory();
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
          <p>{shopItem.description01}</p>
          <button onClick={() => goBack()}>Back to Shop</button>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink to={`/the-shop/${shopItem.id}/shipping`}>
          Click for Shipping information
        </NavLink>
        <NavLink to={`/the-shop/${shopItem.id}/images`}>
          Click for Other Images
        </NavLink>
      </nav>
      <Route path={`/the-shop/:itemID/shipping`}>
        <ItemShipping item={shopItem} />
      </Route>
      <Route path={`/the-shop/:itemID/images`}>
        <img className="altimgs" src={shopItem.images01} alt="More Images Comming Soon" />
        <img className="altimgs" src={shopItem.images02} alt="" />
        <img className="altimgs" src={shopItem.images03} alt="" />
        <img className="altimgs" src={shopItem.images04} alt="" />
        <img className="altimgs" src={shopItem.images05} alt="" />
      </Route>
    </div>
  );
}
export default Item;
