import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#141E27' }}>
        <Container className="pt-5 pb-2 text-start">
            <Row>
                <Col md={3} className="text-white">
                    {/* <h3 className="text-center text-md-start"><img style={{height: '55px'}} className='img-fluid' src={"https://templatekit.jegtheme.com/waterboom/wp-content/uploads/sites/136/2021/08/logo-footer.png"} alt="" />Water <span className="text-info">Kingdom</span></h3> */}
                    <p className="text-light text-center text-md-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <p><i class="fas fa-map-marker-alt text-info"></i> USA, Florida</p>
                    <p><i class="fas fa-envelope-square text-info"></i> pizzahut@gmail.com</p>
                    <p><i class="fas fa-phone-square-alt text-info"></i> 8878786</p>
                </Col>
                <Col md={2} className="text-white">
                    <h4 className="text-center text-md-start mb-3">Quick Links</h4>
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> About Us</button><br />
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> Services</button><br />
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> Booking</button><br />
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> Packages</button><br />
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> Contact</button>
                </Col>
                <Col md={3} className="text-white">
                    <h4 className="text-center text-md-start mb-3 text-light">Useful Links</h4>
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> Privacy Policy</button><br />
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> Terms and Conditions</button><br />
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> Disclaimer</button><br />
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> Support</button><br />
                    <button className="information-btn"><i class="fas fa-greater-than text-info"></i> FAQ</button>
                </Col>
                <Col md={4} className="text-white">
                    <h4 className="text-center text-md-start mb-3">Opening Hours</h4>
                    <Row>
                        <Col>
                        <p>Monday - Friday</p>
                        </Col>
                        <Col className="ps-0">
                        <p><i class="fas fa-clock text-info"></i> 11:00 AM - 16:00 PM</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>Saturday - Sunday</p>
                        </Col>
                        <Col className="ps-0">
                        <p><i class="fas fa-clock text-info"></i> 11:00 AM - 16:00 PM</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>Holiday</p>
                        </Col>
                        <Col className="ps-0">
                        <p><i class="fas fa-clock text-info"></i> 11:00 AM - 16:00 PM</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className="pe-0">
                        <p><i class="fab fa-cc-mastercard text-info"></i> MasterCard</p>
                        </Col>
                        <Col>
                        <p><i class="fab fa-cc-paypal text-info"></i> PayPal</p>
                        </Col>
                        <Col>
                        <p><i class="fab fa-cc-visa"></i> Visa</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className="text-white" />
            <p className="text-white text-center">Copyright &copy; 2022. All rights reserved.</p>
        </Container>
    </div>
    );
};

export default Footer;