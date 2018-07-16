import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

const Background=styled.div`
background-image: url(https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=500&q=60);
background-size:cover;
height:auto
`

const Forground=styled.div`
height:100vh;

`
const Button= styled.button`
height:20px;
width:45px;
`

const Title=styled.div`
font-family: 'Monoton', cursive;
color:white;
font-size :50px;
`
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
                 
                <Forground>
              
                    <Title> Title: {oneMovie.title} </Title>
                    <h3> Genre: {oneMovie.genre}</h3>
                    <h3> Year: {oneMovie.year} </h3>
                   <h3>Synopis: {oneMovie.synopis} </h3>
                   <div> 
                        {/* <Link key={i} to={`/movies/${oneMovie._id}`}>        
                  <button>stuff </button>
                   </Link> */}
                   
                   </div>
                </Forground>
              
            )
        })
        return (
            <Background>
              <nav>  <SearchBar/>  </nav>
                
                {allMovies}
              
            </Background>
        );
    }
}

export default MoviesList;





