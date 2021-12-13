import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard";

const Details = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  //   load data from api

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const singlemovie = movies?.find((mv) => id == mv.show.id);

  return (
    <div className="container my-5">
      <DetailsCard singlemovie={singlemovie}></DetailsCard>
    </div>
  );
};

export default Details;
