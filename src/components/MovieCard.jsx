const MovieCard = ({movie, watchList, addMovie, removeMovie}) => {
    const inWatchlist = watchList.filter((mov) => mov.id === movie.id);

    const button = inWatchlist.length === 0 ?
        ( <button onClick={() => addMovie(movie)}>Add to List</button> ) :
        ( <button onClick={() => removeMovie(movie)}>Remove</button> );

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie image" />
                <h3>{movie.original_title}</h3>
            </div>
            {button}
        </div>
    );
};

export default MovieCard;