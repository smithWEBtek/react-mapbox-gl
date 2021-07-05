import './App.css';
import Map from './components/Map/Map';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React Map GL</h3>
      </header>
      <Map />
    </div>
  );
}

export default App;
