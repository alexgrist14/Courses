import React, {useEffect, useState} from 'react';
import '../styles/careers.scss';
import greenHat from '../assets/green-hat.png';
import CareerGroup from './CarreerGroup';
import Arrow from "../assets/arrow_mobile.svg";

function Career() {
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
        <>{isMobile ?
            <>
                <h1 className='course-title'>Find Your Course</h1>
                <div className="career-header-container">
                    <div className='career-header'>
                        <img className="hat-img" src={greenHat} alt="hat"/>
                        <h2 className="career-title">Choose your career</h2>
                    </div>
                    <img className={`careers-group-arrow`} src={Arrow}/>
                </div>
            </>
            :
            <div className='course-container'>
                <h1 className='course-title'>Find Your Course</h1>
                <div className="career-container">
                    <div className="career-header">
                        <img className="hat-img" src={greenHat} alt="hat"/>
                        <h2 className="career-title">Careers</h2>
                    </div>
                    <hr className="line"/>
                    <div className="careers-section">
                        <CareerGroup title='Business & Management'/>
                        <CareerGroup title='Computing & IT'/>
                        <CareerGroup title='Fashion & Media'/>
                        <CareerGroup title='Finance & Accounting'/>
                        <CareerGroup title='Law & Criminology'/>
                        <CareerGroup title='Marketing & Communications'/>
                        <CareerGroup title='Psychology & Social Sciences'/>
                    </div>
                    <hr className="line bottom"/>
                    <button className='career-show-all'>Show all programmes</button>
                </div>
            </div>
        }
        </>
    );
}

export default Career;
