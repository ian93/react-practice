import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = ( props ) => props.persons.map((person, index) => {
    return (
        <ErrorBoundary key={ person.id }>
            <Person
                name={ person.name }
                age={ person.age }
                click={ () => props.clicked(index) }
                change={ (event) => props.changed(event, person.id) } />
        </ErrorBoundary>
    );
});

export default persons;