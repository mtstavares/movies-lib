import { useState, useEffect} from "react"
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {    

    const [topMovies, setTopMovies] = useState([])
    const [loading, setLoading] = useState(true);

    const getTopRatedMovies =  async (url) => {
        try {
            setLoading(true);

            const res = await fetch(url)
            if(!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()

            setTopMovies(Array.isArray(data.results) ? data.results : [])
        } catch (error) {
            console.log("Erro na requisição: ", error)
            setTopMovies([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`

        getTopRatedMovies(topRatedUrl)
    }, [])

  return (
    <div className="container">
        
        <h2 className="title">Melhores filmes:</h2>
        {loading && <div className="loader" aria-label="Carregando" />}
        <div className="movies-container">
            

        {!loading && topMovies.length === 0 && (
          <p>Nenhum filme encontrado.</p>
        )}

        {!loading &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        </div>
    </div>
  )
}

export default Home