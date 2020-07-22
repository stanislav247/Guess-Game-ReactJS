import React, { Component } from 'react';

class Navbar extends Component {
    state = {
      
      }

      
    render() { 
        return (
         <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Guess Game</a> 

                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-danger mr-sm-2 disabled mr-1">Грешки: {this.props.mistakes}</button>
                <button className="btn btn-outline-success my-2 my-sm-0 disabled">Рунд: {this.props.round}</button>
              </form>           
            </nav>
        </div> 
          );
    }
}
 
export default Navbar;