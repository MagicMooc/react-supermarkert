import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Input from "./Input.js";
import Button from "./Button.js";

const stripeLoadedPromise = loadStripe(
  "pk_test_51KjDsgGj8t01EJlliJiKdSknK02CLenezJZrUkCITPJ2wPk6aUK8eYCpllkRAvEciQujfqkxDGdGsVyr17vVXxDe001pR3GL7k"
);

export default function Cart({ cart, setCart }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const [email, setEmail] = useState("");

  const redirectUrl = new URL(window.location.href).origin;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });

    stripeLoadedPromise.then((stripe) => {
      
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: redirectUrl,
          cancelUrl: redirectUrl,
          customerEmail: email,
        })
        .then((response) => {
          setCart([]);
          console.log(response.error);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="cart-layout">
      <div>
        <h1>您的购物车</h1>
        {cart.length === 0 && <p>您没有在购物车中添加任何产品</p>}
        {cart.length > 0 && (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <th width="25%" className="th-product">
                    产品
                  </th>
                  <th width="20%">单位价格</th>
                  <th width="10%">数量</th>
                  <th width="25%">价格</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>

              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">总计</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <p>输入您的邮箱地址并点击支付，您的订单将于当天交付到你手中</p>
              <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                required
              />
              <Button type="submit">支付</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
