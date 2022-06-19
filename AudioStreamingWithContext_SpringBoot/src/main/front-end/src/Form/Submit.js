import React from 'react';

function Submit(props) {
    return (
        <input
            id="submit"
            type="submit"
            name="submit"
            value={props.buttonValue}
        ></input>
    )
}

export default Submit