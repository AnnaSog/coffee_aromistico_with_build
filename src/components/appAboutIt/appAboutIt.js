import {Container, Row, Col} from 'react-bootstrap';
import Menu from '../menu/menu';
import Footer from '../footer/footer'

import beans_logo from '../ourCoffee/Beans_logo.png';
import aromistico from './aromistico.jpg';
import './appAboutIt.css';

const AppAboutIt = ({coffeeId, data}) => {

    const elements = data.map(item => {     //перебираем [] c данными и каждый раз создаем новую карточку с данными, ктр прописаны
        const {id, coutry, price} = item;   //необходимо из объекта элемента(item) отделить id
        if(coffeeId === id ) {
            return(
                <div
                    key={id} 
                    className="aboutIt_p title_fz14">
                        
                    <b>Country</b> : {coutry} <br /> <br />
                    <b>Description</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> <br />
                    <b>Price:</b> <span className="aboutIt_span">{price}</span> 
                </div>
            )
        }
    })
        
    return(
        <div className="appAboutIt">
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
                        <div className="aboutIt">
                            <div className="aboutIt_img">
                                <img src={aromistico} alt="coffee" className="coffee_aromistico" />
                            </div>  
                            <div className="aboutIt_info">
                                <h2 className="title_fz24">About it</h2>
                                <img src={beans_logo} alt="logo" className="img_logo" />
                                {elements}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>

        </div>
    )
}

export default AppAboutIt;