import React from "react";
import Result from "./Result";
const Results = ({ results ,openPopup,selected}) => {
  // console.log(results);
  if(results){
    return (
        <div>
          <div className="row">
            {results.map((result) => (
              <Result key={result.imdbID} result={result} openPopup={openPopup} selected={ selected}/>
            ))}
          </div>
        </div>
      );
  }else{
      return(
          <div>
              
          </div>
      )
  }
  
};

export default Results;
