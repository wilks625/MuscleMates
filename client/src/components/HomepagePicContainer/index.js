import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import  pic1  from '../../assets/homePagePicture.jpeg'
import { Link } from 'react-router-dom'
const HomepageContainerpic = () => {
  return (
    <div>
      <Container className="mx-0">
  <Row>
    <Col id="piccol" md={12} lg={6}>
      <Image className="mainpic" src={pic1} style={{height:"100%", width: "100%" }} />
    </Col>
    <Col>
      <Container className="subheader" >
        <h1 style={{fontSize: '60px', fontFamily: "permanent marker",  color: 'white'}}>Workout With me</h1>
        <h2 style={{fontFamily:'Encode Sans SC', color: 'white'}}>JOIN TODAY!</h2>
      </Container>
            <Link to="/Login">
              <Button style={{fontFamily:'Encode Sans SC'}} variant="outline-secondary" size="lg">
                Log on
              </Button>
            </Link>
      {" "}
      <Link to="Signup">
    <Button style={{fontFamily:'Encode Sans SC'}} variant="outline-secondary" size="lg">
      Sign up
    </Button>
    </Link>
    </Col>
  </Row>
</Container>
    </div>
  )
}
export default HomepageContainerpic