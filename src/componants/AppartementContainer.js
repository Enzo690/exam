import '../css/Appart.scss';
import '../css/var.scss';
import React from 'react';
import Appart from './Appartement';
import { Button } from 'react-bootstrap';

class AppartContainer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount = () => {
        fetch(`http://92.222.69.104/appartement/all?size=6&page=0`)
            .then(response => response.json())
            .then(service => {
                console.log(service.content)
                this.setState({
                    isLoaded: true,
                    service: service
                });
            })
    }

    handleClick() {
        fetch(`http://92.222.69.104/appartement/all`)
            .then(response => response.json())
            .then(service => {
                console.log(service.content)
                this.setState({
                    isLoaded: true,
                    service: service
                });
            })
        const { service } = this.state;

        return (
            <div>
                <div>
                    {
                        service.content.map((item, i) =>
                            <Appart key={i}
                                country={service.content[i].state}
                                city={service.content[i].city}
                                address={service.content[i].address}
                                img={service.content[i].img}
                                price={service.content[i].dollar}
                                sqfit={service.content[i].squareFit}
                                bathroom={service.content[i].nbBathRoom}
                                bedroom={service.content[i].nbBedRoom}>
                            </Appart>
                        )
                    }

                </div>
            </div>
        )

    }

    render() {
        const { service } = this.state;
        if (service) {

            return <>
                <div className="container-fluid containerAppart">
                    <div className="container">
                        <div className="row justify-content-center" id="append">
                            {
                                service.content.map((item, i) =>
                                    <Appart key={i}
                                        country={service.content[i].state}
                                        city={service.content[i].city}
                                        address={service.content[i].address}
                                        img={service.content[i].img}
                                        price={service.content[i].dollar}
                                        sqfit={service.content[i].squareFit}
                                        bathroom={service.content[i].nbBathRoom}
                                        bedroom={service.content[i].nbBedRoom}>
                                    </Appart>
                                )
                            }
                        </div>

                        <div className="row justify-content-center">
                            <Button onClick={() => this.handleClick()} className="allPropertiesButton ralMedium" variant="danger">All Properties</Button>
                        </div>

                    </div>
                </div>
            </>;
        } else {
            return <div className="container-fluid">
                <div className="container">
                    <div className="row justify-content-center">

                    </div>
                </div>
            </div>;
        }
    }
}

export default AppartContainer;