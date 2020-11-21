import React from 'react'
import Tilt from 'react-tilt';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import websitedesign from '../../assets/img/services/website-design.png';
import websitedevelopment from '../../assets/img/services/website-development.png';
import ecomm from '../../assets/img/services/e-commerce-solution.png';
import resp from '../../assets/img/services/responsive-website-design.png';
import seo from '../../assets/img/services/seo.png';
import smi from '../../assets/img/services/social-media-integration.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import "./services.component.css";

const Services = () => {
    return (
        <div  className="pt-3 pb-3" id="services">
            <h1 className="text-center font-details-b pb-4">Services</h1>
            <Jumbotron className="jumbo-style">
            
            <CardDeck>
                <Row className="d-flex justify-content-around">
                <Col md={4}>
                <Tilt option={{max: 25}}>
                <Card className="focus mt-2 mb-2" bg="warning" border="dark">
                    <Card.Img  variant="top" src={websitedesign}/>
                    <Card.Body>
                    <Card.Title  className="text-center  card-title">Website Design</Card.Title>
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                        The approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </Tilt>
                </Col>

                <Col md={4}>
                <Tilt option={{max: 25}}>
                <Card className="focus mt-2 mb-2" bg="warning" border="dark">
                    <Card.Img variant="top" src={websitedevelopment} />
                    <Card.Body>
                    <Card.Title className="text-center  card-title">Website Development</Card.Title>
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                    The web development process involves taking the graphical elements defined in the design process and coding them into a custom Wordpress theme.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </Tilt>
                </Col>

                <Col md={4}>
                <Tilt option={{max: 25}}>
                <Card className="focus mt-2 mb-2" bg="warning" border="dark">
                    <Card.Img variant="top" src={ecomm} />
                    <Card.Body>
                    <Card.Title className="text-center  card-title">E-commerce Solution</Card.Title>
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                    An eCommerce solution is a feature-filled, customisable online storefront and shopping cart that will be directly integrated into your website.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </Tilt>
                </Col>
                </Row>
            </CardDeck>
            
            <hr/>
            <CardDeck>
                <Row className="d-flex justify-content-around">
                <Col md={4}>   
                <Tilt option={{max: 25}}>
                <Card className="focus mt-2 mb-2" bg="warning" border="dark">
                    <Card.Img variant="top" src={resp} />
                    <Card.Body>
                    <Card.Title className="text-center  card-title">Responsive Website Design</Card.Title>
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                    Having a responsive layout means that your website fluidly resizes for optimal viewing regardless of the screen size or device (e.g. iPhone, iPad).
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </Tilt>
                </Col>

                <Col md={4}>
                <Tilt option={{max: 25}}>
                <Card className="focus mt-2 mb-2" bg="warning" border="dark">
                    <Card.Img variant="top" src={seo} />
                    <Card.Body>
                    <Card.Title className="text-center  card-title">SEO(Search Engine Optimisation)</Card.Title>
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                    SEO is the practice of improving and promoting a website in order to increase the number of visitors it receives.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </Tilt>
                </Col>

                <Col md={4}>
                <Tilt option={{max: 25}}>
                <Card className="focus mt-2 mb-2" bg="warning" border="dark">
                    <Card.Img variant="top" src={smi} />
                    <Card.Body>
                    <Card.Title className="text-center  card-title">Social Media Integration</Card.Title>
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                    Social media integration enables your website to post updates to Facebook, displays a Twitter feed, and links to your social media accounts.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </Tilt>
                </Col>
                </Row>
            </CardDeck>
            </Jumbotron>
        </div>
    )
}

export default Services;
