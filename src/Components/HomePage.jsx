import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "@reach/router";

import { white } from 'material-ui/styles/colors';
const HomePage = () => {
    return ( <div>
    <h1>Welcome to the world of chuck Norris</h1>
    <body className='home'>
  
    <Link to='/search'  style={{ textDecoration: 'none', color:white, }} >
                       <Button  variant="contained" color="secondary">Search For A Joke</Button></Link>
                   <Link to='/random'  style={{ textDecoration: 'none', color:white, }} >
                       <Button  variant="contained" color="secondary">Get A Random Joke</Button></Link>
    </body>
    </div> );
}
 
export default HomePage;