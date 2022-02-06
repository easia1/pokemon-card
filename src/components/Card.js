import pkmnImg from '../pikachu.png';
import lightning from '../lightning.png';
import normal from '../normal.png';
import { useState } from 'react';
/* import Banner from "./Banner"; */

const Card = (props) => {
    const [clicked, setClicked] = useState(false);
    const [pkmnHP, setHP] = useState(60);

    const attack = (props) => {
        if (pkmnHP >= 10) {
            console.log(props.pkmnName + ' used Electro Ball!');
            console.log('Opponent used Tackle!');
            setHP(pkmnHP - 10);
            setClicked(true);
        } else {
            console.log(props.pkmnName + ' cannot fight anymore!');
        }
    };
    const heal = (props) => {
        console.log(props.pkmnName + "'s health was restored!");
        setHP(60);
    };
    const run = (props) => {
        console.log(props.pkmnName + " can't run away!");
    };

    return (
        <div className={'card-container ' + (pkmnHP < 10 ? 'bw' : '')}>
            <header className="card-header">
                <span className="card-type">BASIC</span>
                <h1 className="pkmn-name">{props.pkmnName}</h1>
                <div className="hp-info">
                    <span className="hp-label">HP</span>
                    <span className="hp-number">{pkmnHP}</span>
                    <img
                        className="type-icon"
                        src={lightning}
                        alt="Type icon"
                    />
                </div>
            </header>
            <div className="img-container ">
                <img className="pkmn-img" src={pkmnImg} alt="Pokemon" />
                <p className="pkmn-desc">
                    NO. 025 Mouse Pokémon HT 1'4" WT 13.2 lbs.
                </p>
            </div>
            <div className="card-content">
                <div className="move-header">
                    <div className="move-type-icon-container">
                        <img
                            className="move-type-icon"
                            src={normal}
                            alt="Move icon"
                        />
                    </div>
                    <span className="move-title">Charge</span>
                </div>
                <p className="move-info">
                    Search your deck for a lightning energy card and attach it
                    to this Pokémon. Then, shuffle your deck.
                </p>

                <div className="move-header">
                    <div className="move-type-icon-container">
                        <img
                            className="move-type-icon"
                            src={lightning}
                            alt="Move icon"
                        />
                        <img
                            className="move-type-icon"
                            src={normal}
                            alt="Move icon"
                        />
                    </div>

                    <span className="move-title">Electro Ball</span>
                    <span className="move-number">20</span>
                </div>
            </div>
            <div className="button-container">
                <button className="card-button" onClick={() => attack(props)}>
                    Fight
                </button>
                <button className="card-button" onClick={() => heal(props)}>
                    Use potion
                </button>
                {/* <button className="card-button" onClick={() => run(props)}>Run</button> */}
            </div>
            {/* <Banner pkmnName={props.pkmnName}/> */}
        </div>
    );
};

export default Card;
