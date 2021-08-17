import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/search";
import axios from "axios";
import Results from "./components/results/Results";
import Popup from "./components/popup/Popup";
const App = () => {
  const apiurl = "http://www.omdbapi.com/?&apikey=c3330148";
  const [state, setState] = useState({
    s: " ",
    results: [],
    selected: {},
  });
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
        // console.log(results);
      });
    }
  };
  const handleInput = (e) => {
    const s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };
  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let results = data;
      setState((prevState) => {
        return { ...prevState, selected: results };
      });
    });
  };
  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div>
      <div className="container">
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} />:false}
      </div>
    </div>
  );
};

export default App;
