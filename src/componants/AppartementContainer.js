import '../css/Appart.scss';
import '../css/var.scss';
import React from 'react';
import Appart from './Appartement';
import { Button } from 'react-bootstrap';

class AppartContainer extends React.Component {
    constructor() {
        super();
        this.displayData = [];
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
        this.setState({ showMore: true })
    }



    render() {
        const { service } = this.state;
        if (service) {

            const apart = <div className="row justify-content-center" id="append">
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

            const list = [apart, apart, apart]
            const numberOfItems = this.state.showMore ? list.length : 1


            return <>
                <div className="container-fluid containerAppart">
                    <div className="container">
                        <div>
                            {list.slice(0, numberOfItems).map((item) => {
                                return (
                                    <div key={item}>{item}</div>
                                )
                            })}
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