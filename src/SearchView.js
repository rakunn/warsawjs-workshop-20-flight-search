import React from 'react';

/*
    new methods: 
        setState(stateObjectWithPropToChange)
*/

class SearchView extends React.Component {
    state = { //state name is a MUST or via constructor() super() this.state
        fromValue: "WAW",
        toValue: "WAW",
        departValue: "2018-05-20",
        returnValue: "2018-05-20"
    };

    onFromChange = (event) => {
        this.setState(  // setState 
            {
                fromValue: event.target.value
            }
        ); 
    }

    onToChange = (event) => {
        this.setState(
            {
                toValue: event.target.value
            }
        );
    }

    onDepartChange = (event) => {
        this.setState(
            {
                departValue: event.target.value
            }
        );
    }

    onReturnChange = (event) => {
        this.setState(
            {
                returnValue: event.target.value
            }
        );
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.state.fromValue === "") {
            return;
        }

        if (this.state.toValue === "") {
            return;
        }

        if (this.state.departValue === "") {
            return;
        }

        if (this.state.returnValue === "") {
            return;
        }

        this.props.onAppSubmit({...this.state});;
    }

    //properties value, onChange
    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <label>
                <strong>From</strong>
                <select value = { this.state.fromValue } onChange = { this.onFromChange } >
                    <option value="ATL">ATL</option>
                    <option value="WAW">WAW</option>
                </select>
            </label>

            <label>
                <strong>To</strong>
                <select value = { this.state.toValue } onChange = { this.onToChange }>
                    <option value="ATL">ATL</option>
                    <option value="WAW">WAW</option>
                </select>
            </label>

            <label>
                <strong>Depart</strong>
                <input type="date" value = { this.state.departValue } onChange = { this.onDepartChange } />
            </label>

            <label>
                <strong>Return</strong>
                <input type="date" value = { this.state.returnValue } onChange = { this.onReturnChange }/>
            </label>

            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default SearchView;