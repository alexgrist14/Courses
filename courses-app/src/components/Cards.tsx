import React from 'react';
import Card from './Card';
import '../styles/cards-container.scss';
import Logo1 from '../assets/Logo_1.svg'
import Logo2 from '../assets/Logo_2.svg'
import Logo3 from '../assets/Logo_3.svg'
import Logo4 from '../assets/Logo_4.svg'
import Reload from '../assets/reload.svg';

function Cards() {
    return (
        <div className="cards-container">
            <Card icon={Logo1}/>
            <Card icon={Logo1} />
            <Card icon={Logo2} />
            <Card icon={Logo1} />
            <Card icon={Logo3} />
            <Card icon={Logo4} />
            <div className='more-progs'>
                <div>More programmes</div>
                <img src={Reload} alt={'reload'}/>
            </div>
        </div>
    );
}

export default Cards;
