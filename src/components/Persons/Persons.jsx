import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps', props);
  //     return state;
  // }

  // // or use PureComponent for automaticly check all the props
  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[Persons.js] shouldComponentUpdate');
  //     return (
  //         nextProps.persons === this.props.persons ||
  //         nextProps.clicked !== this.props.persons ||
  //         nextProps.changed !== this.props.persons
  //         ) ? false : true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    this.console.log('[Persons.js] getSnapshotsBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering Persons ...');
    return (
      this.props.persons.map((person, index) => {
        return (
          <ErrorBoundary key={person.id}>
            <Person
              name={person.name}
              age={person.age}
              click={() => { this.props.clicked(index); }}
              change={(event) => { this.props.changed(event, person.id); }}
            />;
          </ErrorBoundary>
        );
      })
    );
  }
}

export default Persons;