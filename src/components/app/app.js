import { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import AppAboutUs from "../appAboutUs/appAboutUs";
import OurCoffee from "../ourCoffee/ourCoffee";
import AppFilter from "../appFilter/appFilter";
import SearchPanel from "../searchPanel.js/searchPanel";
import Coffee from "../coffee/coffee";
import AppAboutIt from "../appAboutIt/appAboutIt";
import ForOurPleasure from "../forOurPleasure/forOurPleasure";
import Footer from "../footer/footer";

import "./app.css";

class App extends Component {

  state = {
    data: [        
      {name: "AROMISTICO Coffee 1 kg", coutry: "Brazil",   Brazil:"Brazil",  price: '6.99$', id: 1},     //id - уникальный key у каждого
      {name: "AROMISTICO Coffee 1 kg", coutry:"Columbia",  Columbia:"Columbia", price: '7.99$',  id: 2 },
      {name: "AROMISTICO Coffee 1 kg", coutry:"Kenya",  Kenya:"Kenya", price: '8.99$',  id: 3},
      {name: "AROMISTICO Coffee 2 kg", coutry:"Columbia",  Columbia:"Columbia", price: '10.99$',  id: 4},
      {name: "AROMISTICO Coffee 1,5 kg", coutry:"Brazil",  Brazil:"Brazil", price: '11.99$',  id: 5},
      {name: "AROMISTICO Coffee 2 kg", coutry:"Kenya",  Kenya:"Kenya", price: '12.99$',  id: 6},
    ],
    
    term: '',
    filter: 'All',
    selectedCoffee: null   //данных пока нет
  }
  
  //настройка поиска сотр.
  searchEmp = (items, term) => {  //items - все данные, т.е. this.state.data, term - строка поиска
    if(term.length === 0){     //если польз. ничего не внес, то отражаются все данные
        return items;
    }else {
      return items.filter(item => {
          return item.coutry.indexOf(term) > -1  //фильр.все данные и там находят кусочки строк(indexOf), ктр с совпадают с поиском(term) и показываем если такой есть(> -1)
      })    
    } 
    
  }

  //отправлет запрос в Coffee.js -> CoffeeItem.js и получает id обратно, изменяет его у себя в state и этот номер отравляет в AppAboutIt.js
  onCoffeeSelected =(id) => {
    this.setState({
      selectedCoffee: id
    })
  }

  onUpdateSearch = (term) => {  //эти данные будут приходить из SearchPanel
    this.setState({term});    //обновится состояние в гл. файл
  }

  filterEmp = (items, filter) => {
    switch (filter) {
      case 'Brazil':                                    //тоже самое если бы записали if(filter ==='increase'){
        return items.filter(item => item.Brazil);    
      case 'Kenya':
        return items.filter(item => item.Kenya);
      case 'Columbia':
        return items.filter(item => item.Columbia)
      default:
        return items;
            
    }
    
  }

  onFilter = (filter) => {
    this.setState({
        filter: filter
    });
  }

  render(){
    const {data, term, filter} = this.state;

    const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

    return(
      <Router>
        <div className="app">
          <Routes>
            <Route exact path='/' element={
              <div>
                <AppAboutUs/>
                <Container>
                  <Row>
                    <Col>
                      <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                      />
                    </Col>
                    <Col>      
                      <AppFilter
                        filter={filter}
                        onFilter ={this.onFilter}
                      />
                    </Col>
                  </Row>
                  <Row>
                      <Col>
                        <p>Click on the card to find out more information</p>
                        <Coffee 
                          data={visibleData}
                          onCoffeeSelected={this.onCoffeeSelected} //отправляет запрос на получение id CoffeeItem
                        />
                    </Col>
                  </Row>
                  <Row>
                      <Col>
                        <Footer/>
                    </Col>
                  </Row>
                </Container>
              </div>}
              />
            <Route exact path='/OurCoffee' element={
              <div>
                <OurCoffee/> 
                <Container>
                  <Row>
                      <Col>
                        <Coffee 
                          data={visibleData} 
                          onCoffeeSelected={this.onCoffeeSelected} 
                        />
                    </Col>
                  </Row>
                  <Row>
                      <Col>
                        <Footer/>
                    </Col>
                  </Row>
                </Container>
              </div>
              
              }
            />  
            <Route path='/info' element={
              <AppAboutIt 
                coffeeId={this.state.selectedCoffee} //получает номер id
                data={this.state.data}          //данные где будет сравнивать id и подставляет нужные данные
              />}
            />
            <Route exact path='/ForOurPleasure' element={
              <div>
                <ForOurPleasure />
                <Container>
                  <Row>
                      <Col>
                        <Coffee 
                          data={visibleData} 
                          onCoffeeSelected={this.onCoffeeSelected} 
                        />
                    </Col>
                  </Row>
                  <Row>
                      <Col>
                        <Footer/>
                    </Col>
                  </Row>
                </Container>
              </div>}
            />
          </Routes>
        </div>
      </Router>
    )
  }
  
}
export default App;
