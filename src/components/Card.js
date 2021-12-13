import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movies }) => {
  return (
    <div className="">
      <div className="">
        <div className="row">
          {movies?.map((mv) => (
            <div className="col-12  col-md-6 g-0 ">
              <div className="shadow-sm m-3 row">
                <div className="col-md-4 ">
                  <img
                    src={mv?.show.image.original}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{mv.show.name}</h5>
                    <p className="card-text text-primary">
                      <svg
                        className="me-1"
                        style={{ width: "15px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v4l3 3m6-3a9 9 0 11-18 0 4 4 0 0118 0z"
                        />
                      </svg>

                      <small className="text-muted">{mv?.show.runtime}</small>
                    </p>
                    <p>Language: {mv.show.language}</p>
                    <p>Status: {mv.show.status}</p>
                    <p>Premiered : {mv.show.premiered}</p>
                    <div className="d-flex ">
                      {" "}
                      Genres:
                      {mv.show.genres.map((gn) => (
                        <p className="mx-1">| {gn} |</p>
                      ))}
                    </div>
                    <Link to={`/${mv.show.id}`}>
                      <button className="btn btn-outline-dark">
                        More Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
