import React, { useState, useEffect } from "react";
import "./cart.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const CartList = ({ cart, setCart, handleChange, count }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Container
      style={{
        border: "5px solid black",
        background: "white",
        padding: "2%",
        borderRadius: "10px",


      }}
    >
      <h1>
        <span style={{ color: "black" }}>Shopping Cart</span>
      </h1>

      {cart.map((item) => (
        <div className="cart_box" key={item.id}>

          <Row>
            <Col lg={4} xs={8} >
              <div className="cart_img" style={{ border: '2px' }}>
                <img src={item.image} alt="" />
                <span>{item.title}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} xs={2}>
              <div className='d-flex'>
                <button onClick={() => handleChange(item, -1)}>-</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, 1)}>+</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} xs={2}>
              <div className='d-flex'>
                <span>
                  <b>{item.price}</b>
                </span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </Col>
          </Row>

        </div>
      ))}
      <div className="total" style={{ float: "right" }}>

      <span style={{ color: "black" }}>Rs - {price}</span>
      </div>
      <br />
      <br />
      <div className="d-flex justify-content-end">
       
         
            <Link to="/checkout"><button type="button" className="btn btn-success">
              Checkout
            </button></Link>
        
        {localStorage.getItem("count")>0 ? (<>{localStorage.setItem("TotalCost",price)}</>):(<>{localStorage.setItem("TotalCost",0)}</>)}
        {localStorage.setItem("names", JSON.stringify(cart))}
      </div>

    </Container>
  );
};

export default CartList;
