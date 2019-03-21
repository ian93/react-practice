import React, { Component } from 'react';
import './App.css';
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
    hidePersons: false,
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
    const boo = this.state.hidePersons;

    this.setState({ hidePersons: !boo });
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
    const btnPadding = {
      marginTop: '16px'
    }

    let personObj = null;
    let btnText = null;
    let btnStyle = {};
    if (!this.state.hidePersons) {
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
      btnText = ( 'Hide persons above.' );
      btnStyle = {};
    } else {
      btnText = ( 'Show hidden persons.' );
      btnStyle = ( btnPadding );
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

    return (
      <div className="App">
        <h1>&lt; React App &gt;</h1>
        <input type="text" onChange={ (event) => this.inputChangedHandler(event) } value={this.state.inputText} />
        { validatorObj }
        { personObj }
        <div>
          <button
            style={ btnStyle }
            onClick={ this.togglePersonsHandler }>{ btnText }</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
