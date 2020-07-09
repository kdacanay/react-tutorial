import React, { Component } from 'react';


// react pull from API, only a test
// uses JS built Fetch to grab data and display
// switch between original name/job app with this App in index.js

// use componentDidMount, a react lifecycle method
// Lifecycle is the order in which methods are called in React
// Mounting refers to an item being inserted into the DOM
// use componentDidMount when we pull from API, want to make sure component renders to the DOM first before data is brought in

class App extends Component {

    state = {
        data: []
    };

    //code is invoked after the component is mounted/inserted into DOM
    componentDidMount() {

        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result
                });
            });
    }
    render() {

        //assign data to this.state

        const { data } = this.state;

        const result = data.map((entry, index) => {
            return <li
                key={index}
            >
                {entry}
            </li>;
        });
        return <ul>{result}</ul>;
    }
}

export default App;