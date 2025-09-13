import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import "./Movie.css";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovie = async (url) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMovie(data);
    } catch (e) {
      if (e.name !== "AbortError") {
        console.error("Falha ao buscar filme:", e);
        setError("Não foi possível carregar os dados do filme.");
        setMovie(null);
      }
    } finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    const movieURL = `${moviesURL}${id}?api_key=${apiKey}`;
    getMovie(movieURL);
  }, [id]);

  return (
    <div className="movie-page">
      {loading && <div className="loader" aria-label="Carregando" />}

      {!loading && error && <p className="error">{error}</p>}

      {!loading && !error && movie && (
        <>
          <MovieCard movie={movie} showLink={false} />

          <p className="tagline">{movie.tagline}</p>

          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>
              {movie.budget?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>

          <div className="info">
            <h3>
              <BsGraphUp /> Faturamento:
            </h3>
            <p>
              {movie.revenue?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>

          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Sinopse:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
