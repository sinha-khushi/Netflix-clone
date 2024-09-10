import { useDispatch ,useSelector} from "react-redux";
import { API_OPTIONS } from "../Utlis/Constant";
import { addTopRatedMovies } from "../Utlis/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store

  const dispatch = useDispatch();
  const topRatedMovies = useSelector(
    (store) => store.movies.topRatedMovies
  );
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, 
  //eslint-disable-next-line
  []);
};

export default useTopRatedMovies;
