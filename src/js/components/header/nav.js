import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchData } from "../../actions/index";
import ItemNav from "./ItemNav";

class Nav extends Component {

    componentWillMount() {
        this.props.fetchData();
    }

    renderItem = (item) => {
        return (
            <ItemNav item={item} />
        );
    }

    render() {
        if (!this.props.item) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div className="col-12 col-sm-5 col-lg-5 somenav d-flex justify-content-md-center">
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <ul className="navbar-nav">
                        {this.props.item.map(this.renderItem)}
                    </ul>
                </nav>
            </div>
        );
    }

}

function mapStateToProps({ item }) {
    return {
        item
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Nav);