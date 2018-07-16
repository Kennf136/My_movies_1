import React, { Component } from 'react';
import styled from 'styled-components';


const Background=styled.div`
background-image: url(https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=500&q=60);
background-size:cover;
height:auto;
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
margin-left:10px;
`
class SearchBar extends Component {
    render() {
        return (
            <Background>
            <Form> 
                
                <Title  type="text" name="title" placeholder="Search by title" />
                  
                 <Genre type="text" name="genre" placeholder="search by genre" />

                 <Year type="Year" name="Year" placeholder="search by Year" />           
            
                    <Button>Submit</Button> 
            </Form>
         </Background>
        );
    }
}

export default SearchBar;