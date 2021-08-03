import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import  pic1  from '../../assets/homePagePicture.jpeg'
import { Link } from 'react-router-dom'
import useFindMe from "../../utils/useFindMe"
// document.body.style = 'background: rgb(30, 30, 30);';

const HomepageContainerpic = () => {
  const {coord}= useFindMe()
  console.log("coord", coord)
  return (
    <div>
      <Container className="mx-0">
        <Row>
          <Col id="piccol" md={12} lg={6} >
            <Image className="mainpic" src={pic1}  />
          </Col>
          <Col>
            <Container className="subheader" >
              <div className="slogan" >
              <h1 style={{ fontSize: '60px', fontFamily: "permanent marker", color: 'white' }}>Workout With me</h1>
              <h2 style={{ fontFamily: 'Encode Sans SC', color: 'white' }}>JOIN TODAY!</h2>
              </div>
            </Container>
            <br></br>
            <div className="homebutton">
            <Link to="/Login">
              <Button className="loginbutton" style={{ fontFamily: 'Encode Sans SC' }} variant="secondary" size="lg">
                Log on
              </Button>
            </Link>
            {" "}
            <Link to="Signup">
              <Button style={{ fontFamily: 'Encode Sans SC' }} variant="secondary" size="lg">
                Sign up
              </Button>
            </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default HomepageContainerpic