import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkform from './components/ImageLinkform/ImageLinkform';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import { Component } from 'react';

const particlesOptions={
  particles:{
    number:{
      value:80,
      density: {
        enable: true,
        value_area: 800,
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChage=(event)=>{
    console.log(event);
  }

  render() {
      return (
        <div className="App">
          <Particles className='particles' 
                    params={particlesOptions} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkform />
          {/*
          <FaceRecognition /> */}
        </div>
      )
  } 
}

export default App;
