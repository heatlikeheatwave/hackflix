import React, { Component } from 'react';
import axios from 'axios';

class SingleMovieInfo extends Component {
    constructor() {
        super();
        this.state = {
            movieInfo: {}
        }
    }
    componentDidMount() {
        axios({
            url: `https://api.themoviedb.org/3/movie/${this.props.match.params.id}`,
            method: 'get',
            params: {
                api_key: 'efb3b7e6b4dd9bb8a3c1ffc5a1a55fdf'
            }
        }).then(response => {
            this.setState({
                movieInfo: response.data
            })
        });
    }

    render() {
        console.log(this.props.match.params.id)
        return(
            <div className="movie-catalogue__movie">
                <h2>Drop'N Mad Deets about {this.state.movieInfo.original_title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${this.state.movieInfo.poster_path}`} className="movie-single__poster" alt=""/>
                <p className="movie-single__description">{this.state.movieInfo.overview}</p>
            </div>

        )
    }
}

export default SingleMovieInfo;