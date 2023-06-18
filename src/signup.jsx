import React, { useState } from 'react';
import './first.css';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    username: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }

    if (!formData.password) {
      errors.password = 'Please enter a password';
    }

    if (!formData.username.trim()) {
      errors.username = 'Please enter a username';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter an email address';
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();



    if (validateForm()) {
   
      
      try{
        await axios.post(`https://grocerybackendupdated.onrender.com/ecommerce/register`, {
          name: formData.name,
          password: formData.password,
          username: formData.username,
          email: formData.email
        }).then((res)=>{
          console.log(res.data);
          if(res.status===201){
            alert("Account created");
            navigate("/login");
          }
          else {
        if(res.data.error.keyValue.username!==undefined){
          alert("Username already exists");
        }
         else if(res.data.error.keyValue.email!==undefined){
          alert("Email already exists");
        }
      }
     
       
        })
        
      }
      catch(err){
        console.log(err);
      }
      
  
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
    <div className='regis'>
      <div className="registration-form">
      <h2 style={{color:"white"}}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {formErrors.username && (
            <span className="error">{formErrors.username}</span>
          )}
        </div>

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

       

        <button type="submit" style={{backgroundColor:"yellow",color:"black"}}>Register</button>

        <Link to="/login" style={{ margin: "5px",color:"orange" }}><b>Already have an account ?</b> </Link>
      </form>
    </div>
    </div>
  );
          };

export default RegistrationForm;
