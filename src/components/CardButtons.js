const CardButtons = (props) => {
    const attack = (props) => {
        console.log(props.pkmnName + ' used Electro Ball!');
    };
    const heal = (props) => {
        console.log(props.pkmnName + ' was restored to full health!');
    };
    const run = (props) => {
        console.log(props.pkmnName + " can't run away!");
    };
    return (
        <div className="button-container">
            <button className="card-button" onClick={() => attack(props)}>
                Go, {props.pkmnName}!
            </button>
            <button className="card-button" onClick={() => heal(props)}>
                Heal {props.pkmnName}
            </button>
            <button className="card-button" onClick={() => run(props)}>
                Run
            </button>
        </div>
    );
};

export default CardButtons;
