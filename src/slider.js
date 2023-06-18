import React from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Slide=()=>{
    return (
<Container>
  <Row>
    <Col>
      <Carousel>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://content3.jdmagicbox.com/comp/jaipur/l8/0141px141.x141.180316163542.i9l8/catalogue/seth-g-online-grocery-store-jhotwara-jaipur-online-shopping-websites-r97og.jpg?clr=006666"
            alt="Second slide" height="400"
          />
  
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Online-Grocery-Delivery-Sharjah.jpg"
            alt="Third slide"  height="400"
          />
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.deliforce.io/assets/admin/base/images/blog/1407_614/82.jpg"
            alt="Fouth slide"  height="400"
          />
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.poptin.com/blog/wp-content/uploads/2020/10/How-to-Set-Up-Your-Own-Online-Grocery-Store-1.png"
            alt="Fifth slide"  height="400"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shopurgrocery.com/wordpress/wp-content/uploads/2019/11/Launch-your-Online-Grocery-Store-Special-Script-Features-and-Upgrades.png"
            alt="Sixth slide"  height="400"
          />
        </Carousel.Item>

      </Carousel>
      </Col>
  </Row>
      </Container>
    );
}

export default Slide;