import React, { useEffect, useState } from "react";

const Booking = () => {
  const [movies, setMovies] = useState([]);
  const [getStoredData, setGetStoredData] = useState([]);
//   get data from localStorage
  useEffect(() => {
    const exist = localStorage.getItem("data");

    setGetStoredData(JSON.parse(exist));
    // console.log(exist);
  }, []);
//   console.log(getStoredData);
  const id = getStoredData?.map((mp) => mp.id);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="container mx-auto my-5">
      <h1 className="my-4">Users Booking</h1>
      <div className="row ">
        <div class="card col-4">
          {getStoredData.map(mp=> <div>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{mp.name}</h5>
                <p class="card-text">
                  {mp.email}
                </p>
             
              </div>
            </div>)
           
          }
        </div>
      </div>
    </div>
  );
};

export default Booking;
