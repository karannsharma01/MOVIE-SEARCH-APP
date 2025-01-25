import axios from "axios";

const API_KEY = "931eb56b";
const fetchMovies = async (query, setMovies) => {
  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${encodedQuery}&apikey=${API_KEY}`
    );

    if (response.data && response.data.Search) {
      setMovies(response.data.Search);
    } else if (response.data.Error) {
      console.error("OMDB API Error:", response.data.Error);
      alert(response.data.Error);
      setMovies([]);
    } else {
      setMovies([]);
      alert("No movies found. Try another search query.");
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    alert("Failed to fetch movies. Please try again later.");
  }
};
export default fetchMovies;
