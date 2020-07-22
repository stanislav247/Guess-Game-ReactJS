import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import { queries } from '@testing-library/react';


class RenderApp extends Component {
    state = { 
        round:0,
        questionMarks :[
            {sign:'?' , style:'btn btn-success btn-lg ml-1'},
            {sign:'?' , style:'btn btn-dark btn-lg ml-1'},
            {sign:'?' , style:'btn btn-dark btn-lg ml-1'},
            {sign:'?' , style:'btn btn-dark btn-lg ml-1'},
            {sign:'?' , style:'btn btn-dark btn-lg ml-1'},
            {sign:'?' , style:'btn btn-dark btn-lg ml-1'}
        ],
        upper:false,
        lower:false,
        mistakes: 0       
     }

   

  nextRound=()=>{
     const { questionMarks, upper, lower} = this.state ;

     let round = this.state.round; 
     let mistakes = this.state.mistakes;
     let randNum = Math.floor(Math.random() * 100) + 1;
     
     if(round == 0 && upper == false && lower == false){
        questionMarks[round].sign = randNum;
        round += 1 ;
     }

    else if(upper == true || lower == true){
        questionMarks[round].sign = randNum;

        if(upper == true && questionMarks[round].sign > questionMarks[round-1].sign){
          questionMarks[round].style= 'btn btn-success btn-lg ml-1';
          round += 1 ;  
        }
        else if(lower == true && questionMarks[round].sign < questionMarks[round-1].sign){
          questionMarks[round].style= 'btn btn-success btn-lg ml-1';
          round += 1 ;  
        }
        else if(upper == true && questionMarks[round].sign < questionMarks[round-1].sign){
          questionMarks[round].style= 'btn btn-danger btn-lg ml-1';
          round += 1 ;
          mistakes += 1;  
        }
        else if(lower == true && questionMarks[round].sign > questionMarks[round-1].sign){
          questionMarks[round].style= 'btn btn-danger btn-lg ml-1';
          round += 1 ;
          mistakes += 1;  
        }
               
     }  
       

        this.setState({
            round,
            upper: false,
            mistakes:mistakes,
            lower: false,
            questionMarks
        });
}

  upperFunc=()=>{
    this.setState({
        upper: true,
        lower: false
    });
}

  lowerFunc=()=>{
    this.setState({
        upper: false,
        lower: true,
    });
}

  pickedValue=()=>{
    if(this.state.upper == true){
        return  <h2 style={{color: 'green'}}>По-голямо</h2>
    }
    else if (this.state.lower == true){
        return  <h2 style={{color: 'red'}}>По-малко</h2>
    }
}

buttonsShow=()=>{
  const {round, mistakes} = this.state ;
    if(round == 0){
        return <button className="btn btn-success mr-1" onClick={this.nextRound}>Покажи</button>
    }

    else if(round == 6){
      return (
        <div>
         <b>Завърши играта с брой грешки: {mistakes}</b><br/><br/>
         <button className="btn btn-info" onClick={this.gameReset}>Играй отново</button>
       </div> 
      )
   }

    else if (round > 0){
        return(
              <div>
              <button className="btn btn-success mr-4 ml-2" onClick={this.upperFunc}>По-голямо</button> 
              <button className="btn btn-success mr-4" onClick={this.nextRound}>Покажи</button> 
              <button className="btn btn-danger mr-4" onClick={this.lowerFunc}>По-малко</button><br/><br/>
              <b>Избрано:</b>
              </div>
        )
    }
}

gameReset=()=>{
  this.setState({
    round:0,
    questionMarks :[
        {sign:'?' , style:'btn btn-success btn-lg ml-1'},
        {sign:'?' , style:'btn btn-dark btn-lg ml-1'},
        {sign:'?' , style:'btn btn-dark btn-lg ml-1'},
        {sign:'?' , style:'btn btn-dark btn-lg ml-1'},
        {sign:'?' , style:'btn btn-dark btn-lg ml-1'},
        {sign:'?' , style:'btn btn-dark btn-lg ml-1'}
    ],
    upper:false,
    lower:false,
    mistakes: 0
  });
}


    render() { 
      const {round,mistakes,questionMarks} = this.state ;
        return ( 
            <>
            
            <Navbar round={round + 1} mistakes={mistakes}/>
            <br/><br/><br/><br/>      
            {questionMarks.map(qMark=>
            <button type="button mt-5" className={qMark.style}>{qMark.sign}</button>
            )} 
            <br/><br/><br/><br/><br/><br/>
             {this.buttonsShow()}
            <br/>
            {this.pickedValue()}
                 
              </>   
            
         );
    }
}
 
export default RenderApp;