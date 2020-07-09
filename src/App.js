import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';


// STATE is any data that should be saved and modified without being added to a database. state can update data from a component

class App extends Component {

    // state will contain properties for everything you want to store in the state

    // remove hard-coded characters, able to use state to add characters

    state = {

        characters: [],
    };

    // to remove a character, create method 
    // to retrieve state, es6 method for  this.state.characters (destructure)
    // use this.setState() a built in method to manipulate the state
    // filter(creates new) array based on index parameter and return a new array. this method tests an index vs all the indices in the array, returning all but one that is passed through

    removeCharacter = index => {

        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    };
    // pass the removeCharacter function through as a prop to Table
    // create function that will update the state by taking existing this.state.characters and adding the new character parameter, using ...spead operator
    // then pass onto Form
    handleSubmit = character => {
        this.setState({
            characters: [...this.state.characters, character]
        });
    };



    render() {
        // will pass this data through to the child component TABLE
        const { characters } = this.state;
        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter=
                    {this.removeCharacter}
                />
                <Form
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default App;
