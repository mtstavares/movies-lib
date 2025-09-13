import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css"; 

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY; 

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);        

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    const controller = new AbortController();

    const getSearchedMovies = async () => {
      try {
        setLoading(true);
        setError(null);

      const encoded = encodeURIComponent(query.trim());
      
      const url = `${searchURL}?api_key=${apiKey}&query=${encoded}`;

      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      setMovies(Array.isArray(data.results) ? data.results : []);
      } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error fetching searched movies:", err);
        setError("Não foi possível carregar os filmes agora.");
        setMovies([]);
      }
      } finally {
        setLoading(false);
      }
    };

    getSearchedMovies();
  }, [query]);


  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>

      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && movies.length === 0 && query && (
          <p>Nenhum resultado encontrado.</p>
        )}
        {!loading &&
          !error &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
