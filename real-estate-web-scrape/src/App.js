import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Map from "./components/Map"

require('dotenv').config()

  class App extends Component {
    constructor(props){
      super(props);

     
    }

    state = {
      applicationName: 'TrafficMaps'
    }



   

    render(){
      return(
        <div> 
  <Header/>
  <Map/>

        </div>
      )
    }

  }



export default App;
