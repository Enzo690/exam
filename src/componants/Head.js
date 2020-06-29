import '../css/head.scss';
import '../css/var.scss';
import React from 'react';

class Head extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
        <div className="container-fluid">

            <div className="container text-center">
                <h1 className="titrePrincipal ralLight">Featured <span className="ralMedium">Properties</span></h1>

                <div className="row justify-content-center ligneRougeContainer">
                    <div className="ligneRouge"></div>
                </div>

                <div className="row text-center paraHeadContainer justify-content-center">
                    <p className="paraHead playfairdisplay-r col-md-6">Quisque diam lorem interdum vitaapibus vitae pede.
                    Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.</p>
                </div>

            </div>
        </div>
        );
    }
}

export default Head;