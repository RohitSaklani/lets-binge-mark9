import { useEffect, useState } from "react";
import "./styles.css";

let movies = [
  {
    type: "Action",
    name: "KGF CHAPTOR 2",
    rating: "8.4/10"
  },
  {
    type: "Action",
    name: "Vikram",
    rating: "8.4/10"
  },
  {
    type: "Comedy",
    name: "HERA PHERI",
    rating: "8.1/10"
  },
  {
    type: "Comedy",
    name: "DHOL",
    rating: "6.4/10"
  },
  {
    type: "Crime",
    name: "VIKRAM VEDHA",
    rating: "8.3/10"
  }
];

let selectedObj = [];

export default function App() {
  let [boxContent, setBoxContent] = useState([]);

  useEffect(() => {
    selectchoice("Action");
  }, []);

  function selectchoice(choice) {
    selectedObj = [];
    console.log("choice  :  " + choice);

    movies.map((movie) => {
      if (movie.type === choice) {
        selectedObj.push(movie);
      }
      return 0;
    });
    setBoxContent(selectedObj);
  }

  return (
    <div className="App">
      <div className="head-section">
        <h2>
          <span>( ͡👁️ ͜ʖ ͡👁️)</span> lets Binge
        </h2>
        <small>Checkout my favorite movies . </small>
      </div>

      <nav className="button-bar">
        <button
          className="type-button"
          value="Action"
          onClick={(e) => selectchoice(e.target.value)}
        >
          Action
        </button>
        <button
          className="type-button"
          value="Crime"
          onClick={(e) => selectchoice(e.target.value)}
        >
          Crime
        </button>
        <button
          className="type-button"
          value="Comedy"
          onClick={(e) => selectchoice(e.target.value)}
        >
          Comedy
        </button>
      </nav>
      <hr></hr>
      <div className="data-container">
        {boxContent.map((contentObj) => {
          return (
            <div className="box">
              <h2>{contentObj.name}</h2>
              <small>{contentObj.rating}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
