import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOtherData } from "../../actions/index";
import { bindActionCreators } from "redux";

class OtherMain extends Component {

    componentWillMount() {
        this.props.fetchOtherData();
    }

    render() {
        return (
            <div className="main">
                <div className="container container-main">
                    <h2>{this.props.otherMain}</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ otherMain }, ownProps) {
    let id = ownProps.match.params.id;
    return {
        otherMain: otherMain[`${id}`]
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchOtherData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherMain);
