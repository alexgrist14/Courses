import React, {useEffect, useState} from 'react'
import HatImage from '../assets/hat.svg'
import CalendarImage from '../assets/calendar.svg'
import selectButton from '../assets/select_button_mobile.svg';

interface CardPreviewProps {
    icon: string
}

const CardPreview = ({icon}: CardPreviewProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 600) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
    });
    return (
        <>
            <div className='preview-container' onClick={() => setIsSelected(prevState => !prevState)}>
                <div className='card-line'/>
                <img className={`select-btn-mobile ${isSelected ? 'active' : ''}`} src={selectButton} alt='select_btn'/>
                <img className='card-icon' src={icon} alt='card_icon'/>
                <div className='card-type'>Business & Management</div>
                <div className='card-title'>Master of Business Administration (CMI)</div>
                <div className='card-features'>
                    <div className='card-features-item'>
                        <img className='calendar-img' src={CalendarImage} alt={'calendar'}/>
                        <div className='member'>Postgraduate</div>
                        {isMobile ? <div className='price-mobile'>£12,650</div> : ''}
                    </div>
                    <div className='card-features-item'>
                        <img className='hat-image' src={HatImage} alt='hat'/>
                        <div className='frequency'>Every 12 weeks</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPreview
