import React from 'react';

// SIMPLE component
// does not use class keyword
// can use arrow functions

// make components for Table class: TableHeader and TableBody

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
};
// passing props are effective way to pass existing data to a component, but component cannot change the props, they are READ ONLY. 
// pass props from Table class as parameter, map through the array characters
// pass index from removeCharacter prop as paramater (used as key) so filter knows what item to remove with a button
// onClick function must pass through a function that returns the removeCharacter method

const TableBody = (props) => {

    const rows = props.characterData.map((row, index) => {
        // always use keys when making lists
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button
                        onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};

// CUSTOM CLASS component
// can reuse this component over and over
// a class component must include render() and can only return() one parent element


const Table = (props) => {

    // removeCharacter must pass down to TableBody, must be passed through again as prop
    // change Table from Class to Simple component
    // just like characterData
    const { characterData, removeCharacter } = props;

    return (
        <table>
            <TableHeader />
            <TableBody
                characterData={characterData}
                removeCharacter={removeCharacter}
            />
        </table>
    );
};

export default Table;

// note: components can be nested in other components, and simple and class components can be mixed