import React from 'react';
import '../styles/main.scss';
import Cards from './Cards';
import Career from "./Career";
import '../styles/App.scss'

function Main() {
    return (
        <main className="main">
            <Career/>
            <Cards/>
        </main>
    );
}

export default Main;
