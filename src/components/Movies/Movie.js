import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import useStyles from "./SearchStyles";
import { getMovie } from "./movieSlice";

const Movie = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const classes = useStyles();
  const { id } = useParams();

  const history = useHistory();
  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id]);
  
return (
  <section className={classes.section}>
    <img src={movie.Poster} alt={movie.Title} />
    <div>
      <Typography align="left" variant="h3" gutterBottom component="h2">
        {movie.Title}
      </Typography>
      <Typography align="left" variant="h5" gutterBottom component="h5">
        Year: {movie.Year}
      </Typography>
      <Typography align="left" variant="body1" gutterBottom component="p">
        {movie.Plot}
      </Typography>
      <Typography align="left" variant="h6" gutterBottom component="h6">
        Director: {movie.Director}
      </Typography>
      <Button variant="contained" onClick={() => history.push("/")}>
        Go Back
      </Button>
    </div>
  </section>
);
}

export default Movie;
