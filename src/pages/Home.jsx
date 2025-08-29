import { useState, useEffect} from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {    

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies =  async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()

            setTopMovies(Array.isArray(data.results) ? data.results : [])
        } catch (error) {
            console.log("Erro na requisição: ", error)
        }
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`

        getTopRatedMovies(topRatedUrl)
    }, [])

  return (
    <div>
        {topMovies.map((movie) => {
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </div>
        })}
    </div>
  )
}

export default Home