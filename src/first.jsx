import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Link} from "react-router-dom";
import './App.css';
import Typewriter from 'typewriter-effect';
import './first.css';
import Footer from './footer';
import Slider from './slider';
import { useLocation } from "react-router-dom";

import {
   
    useNavigate
  } from "react-router-dom";
import { useState } from "react";
  

const First=()=>{
 const [color,setColor]=useState("yellow");


    const navigate = useNavigate();
    return(
   
    <div ><nav className="nav bg-light  d-flex justify-content-around" >
    

          <div >
            <b style={{ fontSize: "30px", color: "black", fontWeight: "100px" }}>Amazing Grocery Store</b>
          </div>


          <div>
            <div className="d-flex gap-3 mt-1">
              <a href="#contact"><button type="button" className="btn btn-info ">
                <Link className="text-decoration-none text-dark">
                  Contact us
                </Link>
              </button></a>
              <button type="button" className="btn btn-warning ">
                <Link className="text-decoration-none text-dark"  to="/login" onChange={()=>setColor("lightgreen")}>
                  Login
                </Link>
              </button>
             
              <button type="button" className="btn btn-secondary ">
                <Link className="text-decoration-none text-dark"  to="/signup" onChange={()=>setColor("aqua")}>
                  Signup
                </Link>
              </button>
            </div>
          </div>


      


      </nav><br /><div className="sub" style={{ margin: "0 auto" }}>
          <div>
            <marquee> <h1 style={{ color: "black", fontSize: "30px", color: "red", fontWeight: "70px" }}>Grab amazing offers <br />Hurry Up!!!</h1></marquee>
            <br />
            <div style={{ textAlign: "center", fontSize: "40px", fontWeight: "bolder" }}>
              <Typewriter

                onInit={(typewriter) => {

                  typewriter

                    .typeString("Welcome to")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Amazing Grocery Store")
                    .start();
                } } />
            </div>
          </div>

          <div className="App rounded-pill">

            <div style={{ color: "yellow" }}>
              <div style={{ width: "50%", margin: "0 auto" }}>
                Here you find the daily grocery items of your need
                So, What's looking for just login and buy items of your choice ...
              </div>
            </div>
          </div>
          <br /><br />
          <Slider />
          <br /><br />
          <div id="contact">
            <Footer />
          </div>
        </div></div>

      
    );
}

export default First;