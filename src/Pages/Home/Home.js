import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const Home = () => {
  const [movies, setMovies] = useState([]);

  // load api data 
  
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  console.log(movies);
  return (
    <section className="container my-4">
      <Card movies={movies}></Card>
    </section>
  );
};

export default Home;
