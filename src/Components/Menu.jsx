import React, { Component } from 'react';
import RenderApp from './RenderApp.js';
import {Link} from 'react-router-dom';

class Menu extends Component {

    state = { 
        start: false
     }


    isStarted=()=>{
        if(this.state.start == true){
            return <RenderApp />
        }
        else if (this.state.start == false){
            return (
                <div className="container mt-5">
              <a className="navbar-brand">Guess Game</a>  
                <ul className="list-group">
                <li onClick={this.startGame}>
                    <Link to="/playing" className="btn btn-outline-info btn-lg btn-block mb-2">Начало</Link>
                </li>

                <li>
                    <Link to="/rules" className="btn btn-outline-info btn-lg btn-block">Правила</Link>
                </li>        
                </ul>
        </div>
            )
        }
     } 

     startGame=()=>{
         this.setState({
             start: true
         });
     }

    render() { 
        return ( 
             this.isStarted()
         );
    }
}
 
export default Menu;