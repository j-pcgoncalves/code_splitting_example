import React from "react";
import logo from "../logo.svg";

const Page1 = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <button onClick={() => null}>Page2</button>
            <button onClick={() => null}>Page3</button>
        </div>
    );
}

export default Page1;