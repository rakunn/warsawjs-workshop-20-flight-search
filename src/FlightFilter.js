import React from 'react'

export default class FlightFilter extends React.Component {
    state = {
        priceToggled: false,
        priceMin: 0,
        priceMax: 700
    }

    onChange = property => e => {
        const newState = {};
        newState[property] = e.target.value;

        this.setState(newState, () => {
            this.props.changeFilterValues({
                [property]: newState[property]
            });
        });
    }

    onChangeCheckbox = e => {
        const newToggle = !this.state.priceToggled;
        this.setState({
            priceToggled: newToggle
        });

        this.props.changeFilterValues({priceToggled: newToggle});
    }

    render() {
        return (
            <div>
                <input 
                    type="checkbox" 
                    checked  = { this.state.priceToggled } 
                    onChange = {this.onChangeCheckbox}
                />

                <input 
                    type="number" 
                    value    = { this.state.priceMin } 
                    onChange = { this.onChange("priceMin") } 
                />

                <input 
                    type="number" 
                    value    = { this.state.priceMax } 
                    onChange = { this.onChange("priceMax") } 
                />
            </div>
        );
    }
}