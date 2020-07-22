import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RenderApp from './Components/RenderApp.js';
import Menu from './Components/Menu.jsx';
import { queries } from '@testing-library/react';
import {Route,Switch} from 'react-router-dom';
import Rules from './Components/Rules.jsx';





class App extends Component {

    state ={

    }

 

  render(){ 

    return (  
      

          <>      
            <div className="App mt-4">
               <Menu/>
               <Switch>
                  <Route path="/rules" component={Rules}/>
                  <Route path="/start" />
               </Switch>
           </div>
        </>
     
    );
  }
}
 
export default App;



