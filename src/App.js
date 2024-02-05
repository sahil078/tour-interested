import React, {useState} from "react";
import "./App.css";
import data from "./Data";
import Tours from "./components/Tours";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  // function if there no tour left
  if(tours.length === 0){
    return(
      <div className="refresh">
        <h1>No Tour Left!</h1>
        <button className="btn-white" onClick={() =>setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
}

export default App;
