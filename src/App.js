
import './App.css';
/* import Banner from './components/Banner'; */
// import CardHeader from './components/CardHeader';
// import CardImage from './components/CardImage';
// import CardContent from './components/CardContent';
// import CardButtons from './components/CardButtons';
import Card from './components/Card';

function App() {
  return (
    <div className="main-container">
      {/* <div className="card-container">
        <CardHeader pkmnName="Pikachu" pkmnHP="60"/>
        <CardImage/>
        <CardContent/>
        <CardButtons pkmnName="Pikachu"/>
        
      </div>*/}
      {/* <Banner pkmnName="Pikachu"/> */}
      <Card pkmnName="Pikachu"/>
    </div>
  );
}

export default App;
