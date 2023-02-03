import React from 'react'
import selectButton from '../assets/select_button.svg';

interface CardDetailsProps {
    selected: boolean
    toggleSelected: () => void
    infoOpened: boolean
}

const CardDetails = ({selected, toggleSelected, infoOpened}: CardDetailsProps) => {
    return (
        <>
            <div className="card-details-container" onClick={toggleSelected}>
                <div className="card-details-header">
                    <div className="card-details-title">MSc Data Analytics and Information Systems Management</div>
                    <img className={`select-btn ${selected ? 'active' : ''} ${infoOpened ? "hover" : ''}`}
                         src={selectButton} alt="select button"/>
                </div>
                <div className="card-details-duration">
                    <div className="card-duration">Duration:</div>
                    <div className="card-period">Minimum: 18 months</div>
                    <div className="card-period">Maximum: 36 months</div>
                </div>
                <div className="card-details-date">
                    <div className="card-start-title">Start Dates:</div>
                    <div className="card-month">January, April, July, October</div>
                </div>
                <div className="card-details-price">£8,500</div>
            </div>
        </>
    )
}

export default CardDetails
