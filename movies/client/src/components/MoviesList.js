import React, { Component } from 'react';
import axios from 'axios';


class MoviesList extends Component {
   
    state={
        movies:[]
    }

    componentDidMount(){
        this.getMoviesList();
       
        
    }

    getMoviesList= async ()=>{
       const res = await axios.get('/api/movies');
       await this.setState({movies: res.data});
       return res.data;
       console.log(res.data)
    }
  


    render() {
        const movies= this.state.movies
        const allMovies= movies.map((oneMovie,i) =>{
            console.log("inside my map",oneMovie)
            return(
                <div>
                
                    <h1> Title: {oneMovie.title} </h1>
                    <h3> Genre: {oneMovie.genre}</h3>
                    <h3> Year: {oneMovie.year} </h3>
                    <h3>Synopis: {oneMovie.synopis} </h3>
                </div>
            )
        })
        return (
            <div>
                {allMovies}
              
            </div>
        );
    }
}

export default MoviesList;

