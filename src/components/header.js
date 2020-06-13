import React from 'react';

function header(){
    return (
        <div className="header">
            <img className="logo" src={require("../todo.png")} width="150"/>
            <h1 className="display-1">React Final Project</h1>
        </div>
    )
}

export default header;

