import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class OneMovie extends Component {
    state={
        movie:{}
    }

    componentDidMount(){
        const movieId= this.props.match.params.id;
        this.getMovie(movieId);   
    }

    getMovie= async ( )=> {
        const movieId= this.props.match.params.id;
        const res= await axios.get(`/api/movies/${movieId}`);
        await this.setState({movie: res.data});
        return res.data;
    }



    render() {
        return (
            <div>
                <SearchBar/>
                {/* <h1>{this.state.movies.title}</h1> */}
            </div>
        );
    }
}

export default OneMovie;