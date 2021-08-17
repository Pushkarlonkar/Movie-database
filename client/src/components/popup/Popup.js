import React ,{ useEffect}from "react";
import M, { options } from "materialize-css";
const Popup = ({ selected }) => {
    console.log("inside popup");
    console.log(selected.imdbID);
    useEffect(() => {
        var elems = document.querySelectorAll(".modal");
        var instance = M.Modal.init(elems, {
        dismissible: true,
            opacity: 0.8,
        });
        
    });

  return (
      <div>
      <div id={selected.imdbID} className="modal grey darken-4">
        <div className="modal-content">
          <div className="row   ">
            <div className="col s12 l4">
              <img src={selected.Poster} alt=" " className="poster-inside " />
            </div>
            <div className="col s12 l6">
              <h4 className="white-text">{selected.Title}</h4>
              <p>{selected.imdbRating}</p>
              <a className="btn modal-close waves-effect waves-green">close</a>
            </div>
          </div>
        </div>
        {/* <div className="modal-footer grey darken-4">
                      <a href="#!" className="modal-close btn">close</a>
                  </div> */}
          </div>
    </div>
  );
};

export default Popup;
