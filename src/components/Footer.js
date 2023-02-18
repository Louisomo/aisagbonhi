import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import contactImg from "../assets/img/contact-img.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="text-center text-sm-left">
            <div className="container text-center">
              <h1>I'm glad you are here.</h1>
              <h3>Let's <span style={{ color: 'red' }}>Connect</span></h3>
              <p>I’m currently looking for new opportunities. My inbox is always open, so please consider me for future job and opportunities. Let me help you create a beautiful website.</p>
              <p>Please get in touch.</p>
              <a href="mailto:aisagbonhilouis@gmail.com" className="btn my-2">Hire me</a>
              <div className="social-icon">
                <a href="https://github.com/louisomo"><FaGithub /></a>
                <a href="https://twitter.com/louisfire07"><FaTwitter /></a>
                <a href="https://www.instagram.com/louisfire7"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/aisagbonhilouis"><FaLinkedin /></a>
                <a href="https://wa.me/+2348143314075"><FaWhatsapp /></a>
              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}