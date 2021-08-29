import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import theed from '../images/theed.png';
import nabooNature from '../images/naboo-nature.jpg';
import spaceShip from '../images/space-ship.jpg';
import darkSide from '../images/dark-side.png';
import earthWinter from '../images/earth-winter.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={theed}
                        text="Theed; The Queen Amidala’s home, and capital of the planet Naboo"
                        label='City'
                        path='/services' />

                        <CardItem
                        src={nabooNature}
                        text="Travel through the Naboo's nature"
                        label='Nature'
                        path='/services' />
                    </ul>
                    
                    <ul className="cards__items">
                        <CardItem
                        src={spaceShip}
                        text="Riding spaceship in Galaxy"
                        label='Adventure'
                        path='/services' />

                        <CardItem
                        src={darkSide}
                        text="Don't you wanna see the Dark side?"
                        label='Cool'
                        path='/services' />

                        <CardItem
                        src={earthWinter}
                        text="Maybe you just wanna see winter on Earth"
                        label='Planet'
                        path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
