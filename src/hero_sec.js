import React from 'react';
import Slide from './slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero=({filterResult})=>{
    return(
        <Container >
            <Row className="d-flex align-items-center gx-10" >
            <Col sm={12} lg={3} className="p-3">
        <Container  className='border border-3  ' style={{width:'200px',background:'#D5D5D5'}}> 
        
            <Row><Col><h3>Category</h3></Col></Row>
        <Row >
        <Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample"><b>Fruits & Vegetables</b></a>
        </Col>
            </Row>
        
            <Row>
                <Col><div className="collapse" id="collapseExample">
         
           <ul  style={{listStyle:'none'}}>
            <li onClick={()=>filterResult("Fruits")}><a href="#f" className="text-decoration-none text-dark" ><b>Fruits</b></a></li>
            <li onClick={()=>filterResult("Vegetables")}><a href="#f" className="text-decoration-none text-dark"><b>Vegetables</b></a></li>
           </ul>
        </div></Col>
        
            </Row>
        
        
            <Row>
        <Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample2"><b>Beverages</b></a>
        </Col>
            </Row> 
        
            <Row>
                <Col><div className="collapse" id="collapseExample2">
         
           <ul  style={{listStyle:'none'}}>
            <li  onClick={()=>filterResult("Energy and Soft Drinks")}><a href="#f" className="text-decoration-none text-dark"><b>Energy and Soft Drinks</b></a></li>
            <li onClick={()=>filterResult("Tea")}><a href="#f" className="text-decoration-none text-dark"><b>Tea</b></a></li>
            <li onClick={()=>filterResult("Fruit juice")}><a href="#f" className="text-decoration-none text-dark"><b>Fruit juice</b></a></li>
           </ul>
        </div></Col>
        
            </Row>
        
        
            <Row>
        <Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample3"><b>Staples</b></a>
        </Col>
            </Row>
        
            <Row>
                <Col><div className="collapse" id="collapseExample3">
         
           <ul  style={{listStyle:'none'}}>
            <li onClick={()=>filterResult("Atta , Flours & Sooji")}><a href="#f" className="text-decoration-none text-dark"><b>Atta , Flours & Sooji</b></a></li>
            <li  onClick={()=>filterResult("Pulses")}><a href="#f" className="text-decoration-none text-dark"><b>Pulses</b></a></li>
            <li  onClick={()=>filterResult("Edible Oils")}><a href="#f" className="text-decoration-none text-dark"><b>Edible Oils</b></a></li>
           </ul>
        </div></Col>
        
            </Row>
        
            <Row>
        <Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample4"><b>Dairy & Bakery</b></a>
        </Col>
        
            </Row>
        
            <Row>
                <Col><div className="collapse" id="collapseExample4">
         
           <ul  style={{listStyle:'none'}}>
            <li onClick={()=>filterResult("Dairy")}><a href="#f" className="text-decoration-none text-dark"><b>Dairy</b></a></li>
            <li onClick={()=>filterResult("Ghee")}><a href="#f" className="text-decoration-none text-dark"><b>Ghee</b></a></li>
        
           </ul>
        </div></Col>
        
            </Row>
        
        
            <Row>
        <Col ><a  className="text-decoration-none text-dark"  data-bs-toggle="collapse" href="#collapseExample5"><b>Personal Care</b></a>
        </Col>
        
            </Row>
        
            <Row>
                <Col><div className="collapse" id="collapseExample5">
         
           <ul  style={{listStyle:'none'}}>
            <li onClick={()=>filterResult("Hair Care")}><a href="#f" className="text-decoration-none text-dark"><b>Hair Care</b></a></li>
            <li onClick={()=>filterResult("Oral Care")}><a href="#f" className="text-decoration-none text-dark"><b>Oral Care</b></a></li>
        
           </ul>
        </div></Col>
            </Row>
        
            </Container>  
            </Col>


            <Col lg={9}>
            <Slide/>  
            </Col>
        
        </Row>     
        </Container>  
    );
}


export default Hero;