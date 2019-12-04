import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Catalogue from './Catalogue';
import SingleMovieInfo from './SingleMovieInfo';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="top-header">
                        <h1>Hackflix</h1>
                        <nav>
                            <NavLink exact to="/" activeClassName="active">
                                Catalogue
                            </NavLink>
                        </nav>
                    </header>
                    
                    <Route exact path="/" component={Catalogue} />
                    <Route exact path="/movie/:id" component={SingleMovieInfo} />
                </div>
            </Router>
        );
    }
}

export default App;
