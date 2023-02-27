import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

import "./App.css";

function App() {
    const [movieList, setMovieList] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [page, setPage] = useState(1);

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
        .then((res) => {
            setMovieList(res.data.results);
        })
        .catch((err) => console.log(err));
    };

    const addMovie = (movie) => {
        setWatchList((prevState) => {
            return [movie, ...prevState];
        });
    };

    const removeMovie = (movie) => {
        const newState = watchList.filter((mov) => mov.id !== movie.id);

        setWatchList(newState);
    };

    useEffect(() => {
        getData();
    }, [page]);

    return (
        <div className="App">
            <Header />
            <main>
                <MovieScreen
                    movieList={movieList}
                    page={page}
                    setPage={setPage}
                    watchList={watchList}
                    addMovie={addMovie}
                    removeMovie={removeMovie}
                />
                <Watchlist
                    watchList={watchList}
                    removeMovie={removeMovie}
                />
            </main>
        </div>
    );
}

export default App;
