import React from 'react';
import Flight from "./Flight";
import FlightFilter from "./FlightFilter";

class FlightsView extends React.Component {
    state = {
        flights: [],
        priceMin: 0,
        priceMax: 700,
        priceToggled: false
    }
    //componentDidMount
    async componentDidMount() {
        this.setState({
            flightsFetching: true
        });
        const { departValue, returnValue, fromValue, toValue } = this.props.flightData;
        const url = `http://warsawjs-flights-api.herokuapp.com/flights/${departValue}/${returnValue}/${fromValue}/${toValue}`;

        const flights = await fetch(url)
            .then(res => res.json());

        this.setState({
            flights,
            flightsFetching: false
        });
    }

    changeFilterValues = (values) => {
        this.setState(values);
        console.log(this.state.priceToggled)
    }

    render() {
        const flightsMapped = this.state.flights
            .filter( (flight) => this.state.priceToggled 
            ? flight.price < +this.state.priceMax && flight.price > +this.state.priceMin
            : flight) 
            .map( (flight) => (<Flight key={ flight.id } flight={ flight }/>)); //need to assign unique key for each element
        
        return (
        <div>
            { this.state.flightsFetching ? <p>loading...</p> : null}
            <FlightFilter changeFilterValues = { this.changeFilterValues } />
            { flightsMapped }
        </div>);
    }
}

export default FlightsView;