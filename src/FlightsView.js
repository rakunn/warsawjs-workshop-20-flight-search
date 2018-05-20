import React from 'react';
import Flight from "./Flight";

class FlightsView extends React.Component {
    state = {
        flights: []
    }
    //componentDidMount
    async componentDidMount() {
        const { departValue, returnValue, fromValue, toValue } = this.props.flightData;
        const url = `http://warsawjs-flights-api.herokuapp.com/flights/${departValue}/${returnValue}/${fromValue}/${toValue}`;

        const flights = await fetch(url)
            .then(res => res.json());

        this.setState({
            flights
        });
    }

    render() {
        const flightsMapped = this.state.flights.map( (flight) => (<Flight key={ flight.id } flight={ flight }/>)); //need to assign unique key for each element
        return (
        <div>
            { flightsMapped }
        </div>);
    }
}

export default FlightsView;