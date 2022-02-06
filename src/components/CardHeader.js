
import lightning from '../lightning.png';

const CardHeader = ({pkmnName, pkmnHP}) => {
    return (
        <header className="card-header">
            <span className="card-type">BASIC</span>
            <h1 className="pkmn-name">{pkmnName}</h1>
            <div className="hp-info">
                <span className="hp-label">HP</span>
                <span className="hp-number">{pkmnHP}</span>
                <img className="type-icon" src={lightning} alt='Type icon'/>
            </div>
        </header>
    )
}

export default CardHeader
