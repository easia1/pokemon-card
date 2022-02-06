import pkmnImg from "../pikachu.png"

const CardImage = () => {
    return (
        <div className="img-container">
            {/* <div className="pkmn-jp-name-container">
                <svg width="50%" height="50%" className="pkmn-jp-name"><text x="100px">{pkmnJpName}</text></svg>
            </div> */}

            <img className="pkmn-img" src={pkmnImg} alt='Pokemon'/>
            <p className="pkmn-desc">NO. 025 Mouse Pokémon HT 1'4" WT 13.2 lbs.</p>
        </div>
    )
}

export default CardImage
