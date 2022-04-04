import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
    const cartCount = props.cart.reduce(
        (total, product) => total + product.quantity,
        0
    );

    return (
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">
          小豪杂货铺
        </NavLink>
        <ul>
          <li className="nav-item">
            <NavLink exact activeClassName="active" to="/">
              首页
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" to="/about">
              关于我们
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" to="/products">
              货架
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
              购物车({cartCount})
            </NavLink>
          </li>
        </ul>
      </nav>
    );


}