import React from 'react';

const char = ( props ) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return (props.text.split('').map(
        (char, index) => {
            return <div
                className="Char"
                key={ index }
                onClick={ props.click.bind(this, index) }
                style={ style }>{ char }</div>
    }));
}

export default char;