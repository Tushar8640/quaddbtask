import React, { useEffect, useState } from "react";
import { Children } from "react/cjs/react.production.min";

const DetailsCard = ({ singlemovie }) => {
  const [myData, setMyData] = useState({});
  const [storedData, setStoredData] = useState([]);
  const [myArray, setMyArray] = useState([]);
  
 
  useEffect(() => {
    
    const  exist = localStorage.getItem("data");
    //   get data from localStorage
    setStoredData(JSON.parse(exist));
    // console.log(exist);
  }, []);

  const hangleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newFormData = { ...myData };
    newFormData[field] = value;

    setMyData(newFormData);
  };
  let arr = [];
  const handleOnsubmit = (e) => {
    e.preventDefault();

    console.log(arr);
    myData.id = singlemovie.show.id;

    // console.log();

    // set data to local storage 
    if (storedData?.length > 0) {
      myArray.push(myData);
      arr = [...myArray,...storedData];
      setMyArray(arr);
      
      localStorage.setItem("data", JSON.stringify(myArray));
    } else {
      myArray.push(myData);
      arr = [...myArray];
      setMyArray(arr);
      localStorage.setItem("data", JSON.stringify(myArray));
    }
  };
//   console.log(storedData);

  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${singlemovie?.show?.image.original}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> {singlemovie?.show?.name}</h5>
              <div>
                <p>Language: {singlemovie?.show?.language}</p>
                <p>Status: {singlemovie?.show?.status}</p>
                <p>Premiered : {singlemovie?.show?.premiered}</p>
                <div className="d-flex ">
                  {" "}
                  Genres:
                  {singlemovie?.show?.genres.map((gn) => (
                    <p className="mx-1">| {gn} |</p>
                  ))}
                </div>
                <p>{singlemovie?.show?.summary}</p>

                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Book Now
                </button>
              </div>
            </div>

            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleOnsubmit} className="row g-3">
                      <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                          Movie Name
                        </label>
                        <input
                          value={singlemovie?.show?.name}
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                          Scedule
                        </label>
                        <input
                          value={singlemovie?.show?.schedule.days[0]}
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="col-12">
                        <label for="inputAddress" className="form-label">
                          Time
                        </label>
                        <input
                          value={singlemovie?.show?.schedule.time}
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div className="col-12">
                        <label for="inputAddress2" className="form-label">
                          Your Name
                        </label>
                        <input
                          onBlur={hangleOnBlur}
                          type="text"
                          name="name"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-12">
                        <label for="inputAddress2" className="form-label">
                          Your Email
                        </label>
                        <input
                          onBlur={hangleOnBlur}
                          name="email"
                          type="email"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputCity" className="form-label">
                          Address
                        </label>
                        <input
                          placeholder="Your Address"
                          type="text"
                          className="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div className="col-md-4">
                        <label for="inputState" className="form-label">
                          State
                        </label>
                        <select id="inputState" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label for="inputZip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputZip"
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label className="form-check-label" for="gridCheck">
                            Check me out
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          data-bs-dismiss="modal"
                          type="submit"
                          className="btn btn-dark"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
