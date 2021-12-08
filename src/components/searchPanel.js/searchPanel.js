import { Component } from 'react';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onLocalSearch = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        });
        this.props.onUpdateSearch(term);  //передаем в app.js данные ктр получили и там изм.данные на визуальной части сотр.
    }


    render() {
        return(
            <div className="looking">
                <div className="title_fz14 looking_title">Looking for</div>
                <input type="text"
                    className="form-control search-input" //классы идут из bootstrap
                    placeholder='start typing here...'
                    value={this.state.term}
                    onChange={this.onLocalSearch}>
                </input>
            </div>
        )
    }

}

export default SearchPanel;