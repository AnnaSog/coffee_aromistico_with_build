import CoffeeItem from '../coffeeItem/coffeeItem';

import './coffee.css';

const Coffee = (props) => {

    const elements = props.data.map(item => {     //перебираем [] c данными и каждый раз создаем новую карточку с данными, ктр прописаны
        const {id, ...itemProps} = item;   //необходимо из объекта элемента(item) отделить id
        return(
            <CoffeeItem
                key={id} {...itemProps}          //{...itemProps} развертывает, т.е. тоже самое , что name={item.name} salary ={item.salary} increase = {item.increase}  
                onCoffeeSelected={() => props.onCoffeeSelected(id)}  // передает в CoffeeItem.js, получает обратно id при клике и передает его в app.js
            />   
        )
    })
 
    return(
        <div className='coffee'>
            {elements}
        </div>
    )

}

export default Coffee;