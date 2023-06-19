
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
  const username=localStorage.getItem("UserName");
  return (
    <React.Fragment>
<BrowserRouter>
<Routes>

{
  user ? (<>
 { username && <Route  exact path='/home' element={<Cat/>}/>}
 { username && <Route  exact path='/' element={<Cat/>}/>}
  <Route  exact path='/cartlist' element={<CartList/>}/>
  <Route  exact path='/checkout' element={<FormValidation/>}/>
  </>):(<>
    {<Route  exact path='/login' element={<Login/>}/>}
<Route  exact path='/' element={<First/>}/>
<Route  exact path='/signup' element={<RegistrationForm/>}/>

  
  </>)
}

</Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}
