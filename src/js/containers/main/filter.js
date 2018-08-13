import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterList, filterByType } from "../../actions/index";
import { bindActionCreators } from "redux";

const user = "Никита Ласточкин";

class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onClickCheckbox = this.onClickCheckbox.bind(this);
    }
    /** Filter a list of task by input */
    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
        // We need to go and filter data
        this.props.filterList(event.target.value);
    }

    /** Filter a list of task by input */
    onClickCheckbox(event) {
        let check;
        check = document.querySelectorAll(".custom-control-input");
        check.forEach(check => {
            if (event.target.className !== check.className) {
                check.checked = false;
            }
        });
        this.props.filterByType(event.target);

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
                        <input type="checkbox" class="custom-control-input personal" id="customCheck1" onClick={this.onClickCheckbox} />
                        <label className="custom-control-label" for="customCheck1">Персональное</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input night" id="customCheck1" onClick={this.onClickCheckbox} />
                        <label className="custom-control-label" for="customCheck1">Ночное</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input urgent" id="customCheck1" onClick={this.onClickCheckbox} />
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
    return bindActionCreators({ filterList, filterByType }, dispatch);
}
// связываем actions с компонентой
export default connect(null, mapDispatchToProps)(Filter);