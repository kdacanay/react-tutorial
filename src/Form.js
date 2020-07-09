import React, { Component } from 'react';

//create Form class to add to table
//set initial state of form to an object of empty strings or properties, then assign to state
//update the state of Form class everytime a field is changed in the form
// with submit, all input data will pass to the App state, which will then update Table

class Form extends Component {

    initialState = {
        name: '',
        job: '',
    };

    state = this.initialState;

    // create function that will run everytime a change is made to input (event)
    handleChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };
    // get two properties from state and assign them as values that match form keys
    // run handleChange method as the onChange input
    // submit input method, passes the Form state through as the 2nd character parameter in handleSubmit function on App
    //create button in render to submit
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };
    render() {

        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor='job'>Job</label>
                <input
                    type='text'
                    name='job'
                    id='job'
                    value={job}
                    onChange={this.handleChange} />
                <input
                    type='button'
                    value='Submit'
                    onClick={this.submitForm}
                />
            </form>

        );
    }
}

// export Form and import in App.js to render 

export default Form;