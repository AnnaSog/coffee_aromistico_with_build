
const AppFilter = (props) => {

    const buttonsData = [
        {name:'all', label: 'All'},
        {name:'Brazil', label: 'Brazil'},
        {name:'Kenya', label: 'Kenya'},
        {name:'Columbia', label: 'Columbia'}
    ]

    const button = buttonsData.map(({name, label}) => {   //map новый[] по этим данным
        return(
            <button 
                className="btn-outline-primary filter_btn"
                key={name}
                type='button'
                onClick={() => props.onFilter(name)}>
                    {label}
            </button>
        )
    })

    return(
        <div className="filter">
            <div className="title_fz14 filter_title">Or filter</div>
            <div className="btn-group filter_btns" >
                {button}
            </div>
        </div>
    )
}

export default AppFilter;