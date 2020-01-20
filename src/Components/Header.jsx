import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from "@reach/router"
import { white } from 'material-ui/styles/colors';


import Grid from '@material-ui/core/Grid'


class Header extends Component {
    render() { 
        return (
    <div>
        <AppBar position="static">
            <Toolbar>
            <Grid
      justify="space-between" // Add it here :)
    >
                <Typography variant="h4" color="inherit">
                   <Link to='/' style={{ textDecoration: 'none', color:white, }} > Chuck Norris Joke Box</Link>
                </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
        
        );
    }
}
 
export default Header;