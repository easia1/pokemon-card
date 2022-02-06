import lightning from '../lightning.png';
import normal from '../normal.png';
 
 const CardContent = () => {
   return (
      <div className="card-content">
        <div className="move-header">
          <div className="move-type-icon-container">
          
            <img className="move-type-icon" src={normal} alt="Move icon"/>
          </div>
          <span className="move-title">Charge</span>
        </div>
        <p className="move-info">Search your deck for a lightning energy card and attach it to this Pokémon. Then, shuffle your deck.</p>
        
        <div className="move-header">
          <div className="move-type-icon-container">
            <img className="move-type-icon" src={lightning} alt="Move icon"/>
            <img className="move-type-icon" src={normal} alt="Move icon"/>
          </div>
          
          <span className="move-title">Electro Ball</span>
          <span className="move-number">20</span>
        </div>
      </div>


   )
 }
 
 export default CardContent
 