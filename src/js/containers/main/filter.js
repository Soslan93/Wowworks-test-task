import React, { Component } from "react";
import { connect } from "react-redux";
import { filterList, personFilt, nightFilt, urgentFilt } from "../../actions/index";
import { bindActionCreators } from "redux";

const user = "Никита Ласточкин";

class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

    }
    /** Filter a list of task by input */
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
        // We need to go and filter data
        this.props.filterList(event.target.value);
    }


    /** Filter a list of task by input */
    personFilter = (event) => {
        this.props.personFilt(event.target);
    }

    nightFilter = (event) => {
        this.props.nightFilt(event.target);
    }

    urgentFilter = (event) => {
        this.props.urgentFilt(event.target);
    }

    render() {
        return (
            <div className="filter">
                <div className="form-group">
                    <input
                        placeholder="Поиск по слову"
                        className="word-search"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="check">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" class="personal" id="customCheck1" onClick={this.personFilter} />
                        <label className="custom-control-label" for="customCheck1">Персональное</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" class="night" id="customCheck1" onClick={this.nightFilter} />
                        <label className="custom-control-label" for="customCheck1">Ночное</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" class="urgent" id="customCheck1" onClick={this.urgentFilter}/>
                        <label className="custom-control-label" for="customCheck1">Срочное</label>
                    </div>
                </div>
                <div className="userName">{user}</div>
                <button className="dropdown-toggle" type="button" data-toggle="dropdown"></button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterList, personFilt, nightFilt, urgentFilt }, dispatch);
}
// связываем actions с компонентой
export default connect(null, mapDispatchToProps)(Filter);