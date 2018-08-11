import React, { Component } from 'react';

const balance = '218 982,90';
const user = 'Никита Ласточкин';

export default class info extends Component {

    render() {
        return (
            <div className="col-12 col-sm-5 col-lg-5 d-flex justify-content-md-end someinfo">
                <div className="information">
                    <div className="balance">Баланс <span>{balance} ₽</span></div>
                    <div className="notification"><img src="assets/ic-notifications-black-24-px.png" /> </div>
                    <div className="user"><a className="link" href="#">{user}</a></div>
                    <button class="dropdown-toggle dropdown-toggle-header" type="button" data-toggle="dropdown"></button>
                    <div className="helper"><img src="assets/ic-help-outline-24-px-copy-3.png" /> </div>
                </div>
            </div>
        );
    }

}