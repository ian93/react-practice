import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import TextValidator from './TextValidator/TextValidator'
import Char from './Char/Char';
import Footer from './Footer/Footer';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Max', age: 29 },
      { id: 1, name: 'Ian', age: 30 },
      { id: 2, name: 'Joe', age: 25 }
    ],
    showPersons: false,
    inputText: '',
    textLength: 0
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
    const length = text.length;

    this.setState({ inputText: text, textLength: length });
  }

  charDeleteHandler = ( index ) => {
    const text = [...this.state.inputText];
    text.splice(index, 1);

    this.setState({ inputText: text.join(''), textLength: text.length });
  }

  render() {
    let personObj = null;
    let btnText = null;
    if (this.state.showPersons) {
      personObj = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={ person.id }
                name={ person.name }
                age={ person.age }
                click={ this.deletePersonHandler.bind(this, index) }
                changed={ (event) => this.nameChangedHandler(event, person.id) } />;
            })
          }
        </div>
      );
      btnText = ( 'Hide persons.' );
    } else {
      personObj = null;
      btnText = ( 'Show hidden persons.' );
    }

    let validatorObj = null;
    if (0 !== this.state.textLength) {
      validatorObj = (
        <div>
          <TextValidator
            length={ this.state.textLength } />
          <Char
            text={ this.state.inputText }
            click={ this.charDeleteHandler } />
        </div>
      );
    }

    const assignedClasses = [];
    if (this.state.inputText.length < 5) { assignedClasses.push(classes.red); }
    if (this.state.inputText.length < 3) { assignedClasses.push(classes.bold); }

    return (
      <div className={ classes.App }>
        <h1>&lt; React App &gt;</h1>
        <p className={ assignedClasses.join(' ') }>Input text</p>
        <input type="text" onChange={ (event) => this.inputChangedHandler(event) } value={ this.state.inputText } />
        { validatorObj }
        <div>
          <button
            onClick={ this.togglePersonsHandler }>{ btnText }</button>
        </div>
        { personObj }
        <Footer />
      </div>
    );
  }
}

export default App;
