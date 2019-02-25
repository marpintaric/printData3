import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Header extends Component { 
 
 render() {
    return (
        
        <header style={headerStyle}>
         <h1>Personal information</h1>
         {/* <button component={InputData}>Ispis Podataka</button>
         <button onClick={this.checkOutFamily}>Obitelj</button>
         <button onClick={this.saveData}>Upis Podataka</button> */}

         <Link style={linkStyle} to="/">Ispis Podataka</Link> I
         <Link style={linkStyle} to="/family">Obitelj</Link> I
         <Link style={linkStyle} to="/InputData">Upis Podataka</Link>
         </header>
    )
}
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAling: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    paddingLeft: '5px', 
}

export default Header;
