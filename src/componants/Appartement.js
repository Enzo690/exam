import '../css/head.scss';
import '../css/var.scss';
import React from 'react';
import { Card } from 'react-bootstrap';

class Appart extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {

        return <div className="text-center col-md-4">

            <Card className="cardAppart">
                <Card.Img className="col-md-12" variant="top" src={this.props.img} />
                <Card.Body className="col-md-12">
                    <Card.Title className="col-md-12 ralSemiBold adress">{this.props.address}</Card.Title>
                    <Card.Text className="col-md-12 playfairdisplay-r state">
                    {this.props.city} / {this.props.country}
                    </Card.Text>
                    <Card.Text className="price helvetica" variant="primary">{'$'+this.props.price}</Card.Text>
                    <Card.Footer variant="primary helvetica">{this.props.sqfit+' Sq Ft'} • {this.props.bedroom+' Bedrooms'} • {this.props.bathroom+' bathroom'}</Card.Footer>
                </Card.Body>
            </Card>

        </div>;
    }
}

export default Appart;