import { Component } from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import Menu from '../menu/menu';

import './ourCoffee.css';
import girl from './girl.jpg';
import beans_logo from './Beans_logo.png'



class OurCoffee extends Component {
    render(){
        return(
            <>
                <div className="OurCoffee">
                    <Container>
                        <Row>
                            <Col>
                                <Menu/>
                                <h2 className="title_fz40">Our Coffee</h2> 
                            </Col>
                        </Row>
                    </Container>
                </div>
    
                <Container>
                    <Row>
                        <Col>
                            <div className="beans_ourCoffee">
                                <div className="beans_one">
                                    <img src={girl} alt="girl" className="img_girl" />
                                </div>  
                                <div className="beans_second">
                                    <h2 className="title_fz24">About our beans</h2>
                                    <img src={beans_logo} alt="logo" className="img_logo" />
                                    <div className="beans_p title_fz14 ">
                                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                                        <br/>
                                        Afraid at highly months do things on at. Situation recommend objection do intention
                                        so questions. 
                                        As greatly removed calling pleased improve an. Last ask him cold feel
                                        met spot shy want. Children me laughing we prospect answered followed. At it went
                                        is song that held help face.
                                    </div>  
                                </div> 
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="beans_line"></span>
                        </Col>
                    </Row>
                </Container>
            </>
    
        )
    }

}

export default OurCoffee;