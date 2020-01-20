import React, { Component } from 'react';
import axios from 'axios';


class RandomJoke extends Component {
    state = {jokes:[]}
    render() { 
    
        const jokes=this.state
        return (<div>
            <form className="randomForm" onSubmit={this.handleSubmit}>
                <button className="getJoke">Get Jokes</button>
            </form>
            {Object.keys(jokes).map((item, i) => (
                <h3 key={i}>
                    { jokes[item].joke }
                </h3>
            ))} 
        </div>);
    }
    handleSubmit = (event) => {
        event.preventDefault()

       axios.get('http://api.icndb.com/jokes/random').then(res => {
           const jokes=res.data
            this.setState({ jokes:jokes.value});
        })
    }
    
}
 
export default RandomJoke;