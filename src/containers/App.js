import React, { Component } from 'react';

import classes from './App.css'
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

import Footer from '../components/Footer/Footer';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Max', age: 29 },
      { id: 1, name: 'Ian', age: 30 },
      { id: 2, name: 'Joe', age: 25 }
    ],
    showPersons: false,
    inputText: ''
  }

  deletePersonHandler = ( personIndex ) => {
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
    const boo = this.state.showPersons;

    this.setState({ showPersons: !boo });
  }

  inputChangedHandler = ( event ) => {
    const text = event.target.value;

    this.setState({ inputText: text });
  }

  charDeleteHandler = ( index ) => {
    const text = [...this.state.inputText];
    text.splice(index, 1);

    this.setState({ inputText: text.join('') });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
          persons={ this.state.persons }
          clicked={ this.deletePersonHandler }
          changed={ this.nameChangedHandler } />;
    }

    return (
      <div className={ classes.App }>
        <Cockpit
          showPersons={ this.state.showPersons }
          input={ this.state.inputText }
          texted={ this.inputChangedHandler }
          delete={ this.charDeleteHandler }
          clicked={ this.togglePersonsHandler } />
        { persons }
        <Footer />
      </div>
    );
  }
}

export default App;
