import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron , Grid ,Row,Image,Col,Button} from 'react-bootstrap';
import './home.css';

export default class Home extends Component{
	render(){
		return (
          <Grid>
          <Row className="show-grid text-center">
            </Row>
            <br/>
          
            <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image1.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image2.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image7.gif" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image8.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            </Row>
            <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image8.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image8.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image5.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image6.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            </Row>
              <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image8.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image8.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image5.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image6.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            </Row>
              <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image8.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image8.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image5.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/image6.jpg" circle className="profile-pic"/>
            <h3>Brijesh</h3>
            <p>Brijesh is a software engineer.</p>
            </Col>
            </Row>
          </Grid>
		);
	}
}