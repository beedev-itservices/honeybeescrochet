import React from "react";
import { Link, useHistory } from "react-router-dom";

function ItemsList(props) {
  const { push, goBack } = useHistory();
  console.log(props);
  return (
    <div className="items-list-wrapper">
      <div className="shop">
        <div className="shop-header">
          <button onClick={() => goBack()}>Go Back</button>
          <h1>The Shop</h1>
        </div>
        <div className="shop-words">
          <h4>
            To place an order go to the Form page, select the item number, and
            size you would like.
          </h4>
          <h4>
            You will receive and email from orders@honeybeescrochet.com to
            confirm your selections and to start the personalization process of
            colors, as well as payment options.
          </h4>
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.id}>
            <Link to={`/the-shop/${item.id}/description`}>
              <img
                className="item-list-image"
                src={item.imageUrl}
                alt={item.name}
              />
              <p>{item.name}</p>
            </Link>
            <p>${item.price}</p>
            <p>SKU {item.sku}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsList;
