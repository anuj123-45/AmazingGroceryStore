import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import {Link}  from 'react-router-dom';
import React  from 'react';




const Nav = (props) => {

 


  const handleLogout=()=>{
      localStorage.removeItem("token");
      window.location="/";
  }
  
  return (
<>

   <Container className="mt-2 ">

     <Row> 
     <Col lg={4}  className="d-flex justify-content-between">
      
     
   <div>
      
     
      <Link to="/home" style={{textDecoration:'none'}} id="main-head" onClick={()=>props.handleShow(false)}><h3>Online Groceries Store</h3></Link>
     
           </div>


      </Col>

 <Col lg={4} className="justify-content-center ">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded "
            placeholder="Search Category..."
            aria-label="Search"
            aria-describedby="search-addon"
            onKeyUp={(e)=>props.searchCat(e.target.value)}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i> 
          </span>
        </div>
      </Col>

<Col lg={4} className="d-flex justify-content-end align-items-center">

  <div>
 
   
     <div className="d-flex gap-5" style={{justifyContent:"space-between"}}>
  
     <div className="d-flex" >

{
  props.count>0 ? <><a onClick={() => props.handleShow(true)} style={{ height: 13 ,width:3}}> <i className="fa fa-shopping-cart fa-2x" style={{marginRight:"5px"}} aria-hidden="true"></i>
                    </a><sup  style={{ fontWeight: 'bolder',color:'white',marginTop:"5px" }}><b style={{fontSize:"15px"}}>{props.count}</b></sup></>
  :
  <a    style = {{height:13}}> <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" ></i>
  </a>
}
      </div> 

      
<div>
<b className="mt-2" ><b> Hi , <span > <b style={{color:"white"}}> {localStorage.getItem("UserName")}</b></span></b></b>

</div>

 
        
      
      
        <div >
        <button type="button" className="btn btn-success " >
           <Link  className="text-decoration-none text-dark"  onClick={handleLogout} >
          <b style={{color:"white"}}>Logout</b>
           </Link>
         </button>
        </div>
   
     
    
     
      
 


     </div>
     </div>
      </Col>

      </Row>
      </Container>

  </>
 
  );
};

export default Nav;