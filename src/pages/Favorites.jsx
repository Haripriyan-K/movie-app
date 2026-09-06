import '../css/Favorites.css'

import '../css/Home.css'
import MovieCard from '../component/MovieCard'
import { useMovieContext } from '../context/MovieContext'

function Favorites(){

    const { favorites } = useMovieContext()

    if (favorites.length === 0) {
        return <div className = "favorites">
                    <div className = "favorites-empty">
                    <h3> No Favorite movies added </h3>
                    <p> Start adding your favorite movies</p>
                    </div>
              </div>
    }

    return <div className = "favorites">
                <h2>Favorite Movies</h2>
                <div className = "movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie = {movie} key = {movie.id} />
                    ))}
                </div>
          </div>
}
export default Favorites