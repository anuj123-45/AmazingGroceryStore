import React from "react";
import { Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./App.css";
import { useNavigate } from "react-router-dom";

import Footer from './footer';

export default function FormValidation() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
    var a = [];
    a.push(data);
    localStorage.setItem("Customer Details", JSON.stringify(a));
    const { firstName, lastName, email, phone, address } = data;
    console.log(firstName, lastName, email, phone, address);
    fetch("https://grocerybackendupdated.onrender.com/ecommerce/checkout", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        purchased_items: localStorage.getItem("names"),
        totalCost: localStorage.getItem("TotalCost"),
      }),
    }).then((res) => {
      if (res.status === 200) {
        alert("Data Saved");
        var options = {
          key: "rzp_test_Gx2PIk72JFokkA",
          key_secret: "b94Ld1yRMPySxvASs4IwMCDV",
          amount: localStorage.getItem("TotalCost") * 100,
          currency: "INR",
          name: "STARTUP_PROJECTS",
          description: "for testing purpose",

          handler: function () {
            alert("Payment Successfull");
            alert("Visit Again");
            navigate("/home");
          },
          prefill: {
            name: firstName + " " + lastName,
            email: "ak@gmail.com",
            contact: data.phone,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var pay = new window.Razorpay(options);
        pay.open();
      } else if (res.status === 409) {
        alert("Email already exists");
      }
    })
      .then((d) => {
        //alert(d.message)
        console.log(d);
      });
  }
  return (
    <>

      <div className="checkout">
        <table border="3" style={{ boxShadow: '5px 10px 8px 10px white' }}>
          <tr>
            <td>
              <h1
                style={{ textAlign: "left", fontWeight: "bolder", color: "black" }}
                id="f"
              >
                <u> Checkout</u>
              </h1>
              <h1 style={{ textAlign: "left", fontWeight: "bold", color: "black" }}>
                <i>Total Cost </i> :<span style={{ color: 'darkgreen' }}> Rs {localStorage.getItem("count") > 0 ? (<>{localStorage.getItem("TotalCost")}</>) : (<>0</>)}</span>
              </h1>

            </td>
          </tr>
        </table>
        <div className="d-flex justify-content-center">
          <div
            style={{
              border: "2px solid black",
              textAlign: "center",
              width: "350px",

              margin: "auto",
              marginTop: "40px",
              boxShadow: ' 5px 10px 8px 10px yellow',

            }}
          >
            <h1 style={{ color: "black", fontWeight: "bolder" }}>
              Enter your Details
            </h1>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ padding: "50px" }}>
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", { required: true, maxLength: 10 })}
                />
              </Form.Field>
              {errors.firstName && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Please check the First Name
                </p>
              )}
              <Form.Field>
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", { required: true, maxLength: 10 })}
                />
              </Form.Field>
              {errors.lastName && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Please check the Last Name
                </p>
              )}
              <Form.Field>
                <label>Email</label>
               
                <input
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z](([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </Form.Field>
              {errors.email && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Please check the Email
                </p>
              )}


              <Form.Field>
                <label>Phone no</label>
                <input
                  placeholder="Phone"
                  type="tel"
                  style={{padding:"5px 28px",textAlign:"left"}}
                  {...register("phone", { required: true, pattern: /[0-9]{10}/, maxLength: 10 })}
                />
              </Form.Field>
              {errors.phone && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Please correct the phone number (up to 10 digits)
                </p>
              )}



              <Form.Field>
                <label>Address</label>
              
                <textarea
                  placeholder="Address"
                  {...register("address", {
                    required: true,
                  })}
                  rows={4}
                  cols={27}
                />
              </Form.Field>
              {errors.address && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Fill the address
                </p>
              )}
              <br />
              <button className="btn btn-primary">Submit</button>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
