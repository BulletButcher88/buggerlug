import React from "react";

import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <spam className="item-count">0</spam>
  </div>
);

export default CartIcon;
