import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import Direction from './components/Direction';
import { useRef, useState } from 'react';

function App() {

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const originRef = useRef('');
  const destinationRef = useRef('');

  const handleSubmit = e => {

    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);

    e.preventDefault();
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}><br />
        <label htmlFor="Go Somewhere!">Go Somewhere!</label><br /><br />
        <input type="text" ref={originRef} placeholder="start from..." /><br />
        <input type="text" ref={destinationRef} placeholder="to..." /><br />
        <input type="submit" value="Submit" /><br />

      </form>

      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
