import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Profile from "../../assets/img/profile/image2.png"
import "./about.style.css";

const About = () => {
    return (
        <div id='about'>
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row  className="pt-3 pb-5 align-items-center">
                    {/* Description */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            {/* Description */}
                            Hi there! I am <strong>&nbsp;Durgesh Upadhyay</strong>
                <br />A passionate programmer and a data science enthusiast, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and MongoDB as my tech stack along with a knowledge of Data Science in R langauge with ability of Data Visualisation and Data Wrangling techniques.
                <br />
                Currently I am a student and will be completing my engineering in 2021 with a specialization in Communications Engineering      <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                Along with that, I also help people with Data Science tasks of Data Visualisation and Data Wrangling to provide a user with best experience. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                        </Row>
                        <Row>
                            <Col  className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                            Lets talk
                                        </Button>
                                    </a>
                                </div>
                                <div>
                    <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/udurgesh6" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="http://linkedin.com/in/durgeshupadhyay" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                            </Col>
                        </Row>
                    </Col>
                    {/* Profile Pic */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile"  src={Profile} thumbnail/>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About;
