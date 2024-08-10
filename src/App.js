import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data";

const App = () => {
  // pass data to Tour
  const [tours, setTours] = useState(data);

  // function to remove tour
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  // referesh
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <div>No More Tour Left</div>
        <button className="btn-white"
          onClick={() => {
            setTours(data);
          }}
        >
          Click to Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
