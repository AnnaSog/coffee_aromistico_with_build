import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo_white from './Vector_white.png';

import './footer.css'
import logo_black from './Beans_logo.png';

const Footer = () => {
    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="footer_items">
                            <img src={logo_white} alt="logo_white" className='footer_logo'/>
                            <Link to='/' className="footer_menu">Coffee house</Link>
                            <Link to='/OurCoffee' className="footer_menu">Our coffee</Link>
                            <Link to='/ForOurPleasure' className="footer_menu">For your pleasure</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={logo_black} alt="logo_black" className="logo_black" />
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}

export default Footer;