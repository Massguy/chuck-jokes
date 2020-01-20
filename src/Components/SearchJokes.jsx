import React, { Component } from 'react';
import axios from 'axios';

class SearchJokes extends Component {
    state = {jokes:[], FirstName:'', LastName:''  }

    handleFirstName = event =>{
        this.setState({FirstName:event.target.value,})
    }
    handleLastName= event =>{
        this.setState({LastName:event.target.value})
    }
    handleSubmit =event =>{
        event.preventDefault();

        axios.get(
            `http://api.icndb.com/jokes/random?firstName=${this.state.FirstName.length===0?"Chuck":this.state.FirstName}&amp&lastName=${this.state.LastName.length===0?"Norris":this.state.LastName}`)
            .then(res => {
            const jokes=res.data
             this.setState({ jokes:jokes.value});
         })
    }
    render() { 
        const jokes=this.state
        console.log(jokes)
        return (<div className="formSearch">
                    <h1> Enter FirstName and SecondName to get a personalised joke</h1>
                    <form onSubmit={this.handleSubmit}><label>FirstName:<input type='text' value={this.state.FirstName} onChange={this.handleFirstName}></input></label>
                        <label>SecondName:<input type='text' value={this.state.LastName} onChange={this.handleLastName}></input></label>
                        <input type='submit'></input>
                    </form>
                    
                    {Object.keys(jokes).map((item, i) => (
                       
                        <h3 key={i} className="input-label">{ jokes[item].joke }</h3>
                        
                    ))} 
                </div>);
       
    }
}
 
export default SearchJokes;