import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Background=styled.div`
background-image: url(https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=500&q=60);
background-size:cover;
height:100vh;
display:flex;
align-items:center;
`
const Form=styled.form`
background-color:rgba(192,192,192,0.0);
height:80px ;
width: 100%;

`

const Title=styled.input`
width:200px;
height:35px;
margin-left:6px;
`

const Genre=styled.input`
width:200px;
height:35px;
margin-left:10px;
`

const Year=styled.input`
width:200px;
height:35px;
margin-left:10px;
`
const Button=styled.button`
width:200px;
height:35px;
margin-top:10px;
margin-left:225px;
`
const Forground=styled.div`
height:200px;
width:700px;
background-color:rgba(192,192,192,0.5);
margin-left:350px;
margin-bottom:205px;
display:flex;
align-items:center;
justify-content:space-evenly;
}
`
class MovieSearch extends Component {
    render() {
        return (
            <Background>
                
                <Forground>
                    <Form> 
                   
                   <Title  type="text" name="title" placeholder="Search by title" />
                     
                    <Genre type="text" name="genre" placeholder="search by genre" />

                    <Year type="text" name="Year" placeholder="search by Year" />           
               
               <Link to={'/movies'}> <Button>Submit</Button> </Link>
                        
               </Form> 
               </Forground>
               
            </Background>
        );
    }
}

export default MovieSearch;