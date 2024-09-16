import React, { useState } from "react";
import data from './data';
import Tours from "./components/Tours";
import "./index.css"

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTours(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
        Refresh 
        </button>
      </div>
    )
  }
  return (
    <div className="App" {...tours}>
      <Tours tours={tours} removeTours={removeTours} />
    </div>
  );
};

export default App;
