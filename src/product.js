import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const Pr = ({ arr ,addToCart}) => {
 
  return(
<Container style={{marginTop:'20px'}} id="f">
<Row style={{justifyContent:'center',textAlign:'center',color:'black'}} className="rotating-border rotating-border--google">
    {arr.map((value) => {
      return (
        <div
          l={4}
          className="d-inline-block card col-card"
          style={{ width: "16rem", margin: "10px" ,height:"auto"}}
          key={value.id}
         
        >
          <div className="card h-200" style={{ height: "auto" }}>
            <img
              className="card-img-top position-relative"
              src={value.image}
              alt="Card image cap"
              style={{ width: "100%" }}
            />
            <div className="position-absolute top-0 start-0 ">
              <h2>
                <span className="badge text-bg-danger rounded-circle">
                  {value.discount}
                  {value.offer}
                </span>
              </h2>
            </div>

            <div className="card-body " style={{ height: "160px" }}>
              <h5 className="card-title"><b>{value.title}</b></h5>
              <p className="card-text">{value.description}</p>
              <p className="card-price">
                <span>
                  <b>Rs {value.price}</b>
                </span>
                &ensp;&ensp;
                <span>
                  {value.RP}&nbsp;<s>{value.MRP}</s>
                </span>
              </p>
            </div>
          
            <button
              type="button"
              className="btn btn-outline-warning fw-bold"
              onClick={() => addToCart(value)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      );
    })}
         </Row>


</Container>
  );
};

export default Pr;
