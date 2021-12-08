import {Container, Row, Col} from 'react-bootstrap';

import './appAboutUs.css';
import Menu from '../menu/menu';
import logo_aboutUs from './img/Beans_logo.png';
import logo_white_aboutUs from './img/logo_white_aboutUs.svg';

const AppAboutUs = () => {
    return(
        <div className="appAboutUs">
            <section className="header">
                <Container>
                    <Row>
                        <Col>
                            <Menu/>
                            <div className="container_appAboutUs">
                                <h1>Everything You Love About Coffee</h1>
                                <img src={logo_white_aboutUs}alt="logo_black" className="logoAboutUs" />
                                <h2>We makes every day full of energy and taste <br />
                                Want to try our beans? </h2>
                                <button className='btn_appAboutUs'>More</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
         
            <section className="aboutUs">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="about">About Us</h2>
                            <div className="logo_about"></div>
                            <img src={logo_aboutUs}alt="logo_black" className="logo_black_AboutUs" />
                            <div className='title_aboutUs title_fz14'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face. <br />
                            <br />
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="beans_line"></span>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default AppAboutUs;