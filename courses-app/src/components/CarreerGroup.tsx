import React, { useState } from 'react';
import Arrow from '../assets/arrow.svg';
import activeArrow from '../assets/Arrow_active.svg';
import '../styles/CarreerGroup.scss';

interface CareerProps{
    title: string;
}

const CareerGroup = ({title}:CareerProps) => {
    const [opened, setOpened] = useState(false)

    return (
        <div className='careers-group'>
            <div onClick={() => setOpened(prevState => !prevState)} className={`careers-group-title-wrapper ${opened ? 'active' : ''}`}>
                <div className='careers-group-title'>{title}</div>
                <img className={`careers-group-arrow ${opened ? 'active' : ''}`} src={opened ? activeArrow : Arrow} alt='expand_btn'/>
            </div>
            <div className={`careers-group-content ${opened ? 'opened' : 'closed'}`}>
                <div className='careers-group-content-item'>Market Research Executive</div>
                <div className='careers-group-content-item'>Child Psychologist</div>
                <div className='careers-group-content-item'>Guidance Counsellor</div>
                <div className='careers-group-content-item'>Behaviour Analyst</div>
                <div className='careers-group-content-item'>Recreational Therapist</div>
            </div>
        </div>
    );
};

export default CareerGroup;