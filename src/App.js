
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
  const count = localStorage.getItem("count");
  const price=localStorage.getItem("TotalCost");
  console.log(price);
  return (

<BrowserRouter>
<Routes>



{ user && <Route  exact path='/home' element={<Cat/>}/>}


<Route  exact path='/login' element={<Login/>}/>
<Route  exact path='/signup' element={<RegistrationForm/>}/>



{!user && <Route  exact path='/' element={<First/>}/>}
{user && <Route  path='/cartlist' element={<CartList/>}/>}

{user  && <Route  exact path='/checkout' element={<FormValidation/>}/>}



</Routes>
    </BrowserRouter>

  );
}
