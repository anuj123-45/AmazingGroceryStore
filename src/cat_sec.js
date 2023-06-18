import React ,{useState} from 'react';
import Products from './jsondata';
import Pr from './product';
import Nav from './navbar';
import Hero from './hero_sec';
import CartList from './cartlist';
import  Footer  from './footer';

const s=new Set();
const Cat=()=>{

    const[data,setData]=useState(Products);

   var Result=data;


    const filterResult=(cartitem)=>{
         Result=Products.filter((curData)=>{
            return curData.category===cartitem;
        })
       
        setData(Result);
       

    }
   

const searchCat=(val)=>{
Result=Products.filter((item)=>{
 return  item.title.toLowerCase().includes(val.toLowerCase());
   
})
setData(Result);
}



    const[cart,setCart]=useState([]);
    const[showCart,setShowCart]=useState(false);



const addToCart=(data)=>{
    
if(s.has(data.id)){
    alert("Item Already Taken");
    return;
}
else {
    setCart([...cart,data]);
    console.log("data",cart);
    s.add(data.id);
   
    console.log(s);
}







}

const handleShow=(value)=>{
    setShowCart(value);
}

const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }


    return(
     
      <>
      <div  className="shop-cart-main" >
        
    
      <Nav count={cart.length} handleShow={handleShow} searchCat={searchCat}/>
      {localStorage.setItem("count",cart.length)}
      {localStorage.getItem("count")<=0 ? (<>{localStorage.setItem("TotalCost",0)}</>):(<></>)} 
  <br/>

  <br/>

 {
    showCart?
   <CartList cart={cart} setCart={setCart} handleChange={handleChange} />:
<div>
<Hero filterResult={filterResult}></Hero>

    <Pr arr={Result}  addToCart={addToCart}></Pr>
    <br/>
    <Footer/> 
  
</div>

 
 }
      
      </div>
      
      </>
       
    );
    
}

export default Cat;