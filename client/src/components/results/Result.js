import React, { useState, useEffect } from "react";
import "./result.css";
const Result = ({ result, openPopup, selected }) => {
  //console.log(result);
  const hr = "#" + result.imdbID;
  //const [details, setDetails] = useState({});
  // axios(apiurl + "&i=" + result.imdbID).then(({ data }) => {
  //     let results = data;
  //     console.log(results);
  //     console.log("inside openPopup");
  //     setDetails(data);
  //   });

  

  if (result.Poster === "N/A") {
    return <div></div>;
  } else {
    //
    return (
      <div className="col m4 s10 offset-s1 l4">
        <div className="card center ">
          <div className="card-image">
            <img src={result.Poster} alt=" " className=" poster " />
          </div>
          <div className="card-content">
            <a className="title black-text modal-trigger" href={hr}  onClick= {() => openPopup(result.imdbID)}>
              {result.Title}
            </a>
            {/* <p>{result.Type}</p>
                <p>{result.Year}</p> */}
            {/* <p>{result.imdbID}</p> */}
          </div>
        </div>
        
      </div>
    );
  }
};

export default Result;
