import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Max', age: 29 },
      { id: 1, name: 'Ian', age: 30 },
      { id: 2, name: 'Joe', age: 25 }
    ],
    hidePersons: false
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = ( event, personId ) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === personId;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const boo = this.state.hidePersons;
    this.setState({ hidePersons: !boo });
  }

  render() {
    const btnPadding = {
      marginTop: '16px'
    }

    let personObj = null;
    let btnText = null;
    let btnStyle = {};
    if (this.state.hidePersons === false) {
      personObj = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key = { person.id }
                name = { person.name }
                age = { person.age }
                click = { () => this.deletePersonHandler(index) }
                changed = { (event) => this.nameChangedHandler(event, person.id) } />
            })
          }
        </div>
      );
      btnText = ( 'Hide persons above.' );
      btnStyle = {};
    } else {
      personObj = {};
      btnText = ( 'Show hidden persons.' );
      btnStyle = ( btnPadding );
    }

    return (
      <div className="App">
        <h1>&lt; React App &gt;</h1>
        { personObj }
        <div>
          <button
            style = { btnStyle }
            onClick = { this.togglePersonsHandler }>{ btnText }</button>
        </div>
      </div>
    );
  }
}

export default App;
