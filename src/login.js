import React, { useState } from 'react';
import './first.css';
import {Link} from "react-router-dom";
import axios from "axios";


const Login=()=>{

  const [formData, setFormData] = useState({
    email: '',    
    password: '',

  });

  const [formErrors, setFormErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};


    if (!formData.email.trim()) {
        errors.email = 'Please enter an email address';
      } else if (!isValidEmail(formData.email.trim())) {
        errors.email = 'Please enter a valid email address';
      }


    if (!formData.password) {
      errors.password = 'Please enter a password';
    }





    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validateForm()) {
      
      await axios.post(`http://localhost:5000/ecommerce/login`, {
       
          password: formData.password,
          email: formData.email
        }).then((res)=>{
          console.log(res.data);
          
             if(res.data.data){  
             
              alert(res.data.message);
            console.log(res);  
             }
        
             localStorage.setItem("token",res.data.data);
             window.location="/home";
             localStorage.setItem("UserName",res.data.user.username);

        }).catch((err)=>{
          alert(err.response.data.message);
        })
        
    
    
      
  
      // Form is valid, perform further actions
      console.log('Form submitted:', formData);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
   <div className='regis2'>
   
   <div className="registration-form2">
      <h2 style={{color:"white"}}>Login </h2>
<form onSubmit={handleSubmit}>

<div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>



        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>


        <button type="submit" >Login</button>
       <Link to="/signup" style={{margin:"5px"}}><b>New User then Register</b></Link>

      
      </form>
    </div>
   </div>
  );
};

export default Login;
