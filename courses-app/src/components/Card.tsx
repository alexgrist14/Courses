import React, {useEffect, useState} from 'react';
import '../styles/card.scss';
import CardPreview from './CardPreview';
import CardDetails from './CardDetails';

interface CardProps {
    icon: string
}

const Card = ({icon}: CardProps) => {
    const [selected, setSelected] = useState(false);
    const [infoOpened, setInfoOpened] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (selected && window.innerWidth < 600) {
                setSelected(false);
                setInfoOpened(false);
            } else if (selected && window.innerWidth < 600) {
                setSelected(true);
                setInfoOpened(true);
            }
        });
    })

    return (
        <div className={`card ${infoOpened && window.innerWidth > 600 ? 'hover' : ''}`}
             onMouseEnter={() => (!selected && window.innerWidth > 600) && setInfoOpened(true)}
             onMouseLeave={() => (!selected && window.innerWidth > 600) && setInfoOpened(false)}>
            {infoOpened ?
                <CardDetails selected={selected}
                             infoOpened={infoOpened}
                             toggleSelected={() => setSelected(prev => !prev)}/>
                :
                <CardPreview icon={icon}/>
            }
            <button className={`card-more-info ${infoOpened ? 'hover' : ''} ${selected ? 'selected' : ''}`}>
                More Info
            </button>
        </div>
    );
}

export default Card;
