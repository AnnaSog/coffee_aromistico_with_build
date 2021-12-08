import {Container, Row, Col} from 'react-bootstrap';
import Menu from '../menu/menu';

import './forOurPleasure.css';
import beans_logo from '../ourCoffee/Beans_logo.png';
import cup from './cup.png';

const ForOurPleasure = () => {
    return(
        
        <div className="forOurPleasure">
            <div className="forOurPleasure_header">
                <Container>
                    <Row>
                        <Col> 
                            <Menu/>
                            <h2 className="title_fz40">For your pleasure</h2> 
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col>
                        <div className="beans_ourCoffee">
                            <div className="beans_one">
                                <img src={cup} alt="cup" className="cup_coffee" />
                            </div>  
                            <div className="beans_second">
                                <h2 className="title_fz24">About our goods</h2>
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
                        <span className="beans_line forOurPleasure_line"></span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ForOurPleasure;