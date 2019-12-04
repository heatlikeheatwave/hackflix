import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Catalogue extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            method: 'get',
            params: {
                api_key: 'efb3b7e6b4dd9bb8a3c1ffc5a1a55fdf',
                primary_release_year: 2019
            }
        }).then(response => {
            this.setState({ movies: response.data.results });
        });
    }

    render() {
        return (
            <ul className="movie-catalogue">
                {
                    this.state.movies.map(movie => {
                        return(
                            <li key={movie.id} className="movie-catalogue__movie">
                                <Link to={`/movie/${movie.id}`}>
                                    <h2>{movie.original_title}</h2>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie-single__poster" alt=""/>
                                </Link>
                            </li>
                        )
                    })
                    
                }
            </ul>
        )
    }
}

export default Catalogue;