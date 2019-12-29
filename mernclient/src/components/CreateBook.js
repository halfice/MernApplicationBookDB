import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'


class CreateBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            isbn: '',
            author: '',
            descripton: '',
            published_date: '',

        }
    }
    onSubmit = e =>{
        e.preventdefault;

        const data={
            title: this.state.title,
            isbn: this.state.isbn,
            author: this.state.author,
            description: this.state.description,
            published_date: this.state.published_date,
            publisher: this.state.publisher
        };
        axios
        .post('http://localhost:9002/api/books',data)
        .then(res =>{
            this.setState({
                title: '',
                isbn:'',
                author:'',
                description:'',
                published_date:'',
                publisher:''
              })
              this.props.history.push('/');
        })
        .catch(err =>{
            console.log("Error in CreateBook!");
        });
    };

    render(){
        return(
            
        )
    }
}
