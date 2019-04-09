import React from 'react';

import TextValidator from '../TextValidator/TextValidator'
import Char from '../Char/Char';

import classes from './Cockpit.css'

const cockpit = ( props ) => {
    let charBlock = null;
    if (0 !== props.input.length) {
        charBlock = (
            <div>
                <TextValidator
                    length={ props.input.length } />
                <Char
                    text={ props.input }
                    click={ props.delete } />
            </div>
        );
    }

    const assignedClasses = [];
    let btnClass = '';
    let btnText = 'Show hidden persons.';
    if (props.showPersons) { 
        btnClass = classes.Red;
        btnText = ( 'Hide persons.' );
    }
    if (props.input.length < 5) { assignedClasses.push(classes.red); }
    if (props.input.length < 3) { assignedClasses.push(classes.bold); }

    return (
        <div className={ classes.Cockpit }>
            <h1>&lt; React App &gt;</h1>
            <p className={ assignedClasses.join(' ') }>Input text</p>
            <input type="text" onChange={ (event) => props.texted(event) } value={ props.input } />
            { charBlock }
            <div>
                <button
                    className={ btnClass }
                    onClick={ props.clicked }>{ btnText }</button>
            </div>
        </div>
    );
}

export default cockpit;