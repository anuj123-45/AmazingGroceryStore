
import React from 'react';
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import CartList from './cartlist';
import Cat from './cat_sec';
import FormValidation from './checkout';
import First from './first';
import Login from './login'
import RegistrationForm from './signup';




export default function App() {
  const user=localStorage.getItem("token");
  console.log(user);
  const price=localStorage.getItem("TotalCost");
  console.log(price);
  return (
    <React.Fragment>
<BrowserRouter>
<Routes>


  

{user &&   <Route  exact path='/cartlist' element={<CartList/>}/>}
{user &&   <Route  exact path='/checkout' element={<FormValidation/>}/>}
{user &&   <Route exact path='/anuj/ecom/home' element={<Cat/>}/>}
{user && <Route  exact path='/' element={<Navigate replace to="/anuj/ecom/home"/>}/>}

{!user && <Route  exact path='/' element={<First/>}/>}
<Route  exact path='/signup' element={<RegistrationForm/>}/>
<Route  exact path='/login' element={<Login/>}/>










</Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}
