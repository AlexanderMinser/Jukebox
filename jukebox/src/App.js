import React, { Component } from 'react';
import './App.css';
import "./css_sheet.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '', 
      date: new Date()
    };
  }
  

  componentDidMount() {
    const response = async () => await fetch('/');
    /*
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err)); */
  } 

  callApi = async () => {
    const response = await fetch('/');
    const body = await response.json();
    if (response.status !== 200) 
      throw Error(body.message);

    return body;
  }; 

  render() {
    
    return (
      <div className="App">
                
        <header>
            <link rel="stylesheet" type="text/css" href="../../src/public/css_sheet.css"/>
            <title>Jukebox App</title>
        </header>
        <h1>Welcome to my music player! Current tick:{this.state.date.toLocaleTimeString()}</h1>

        <div className="navbar">
            <div className="file">
                <button className="dropbtn">File
                    <i className="fa fa-caret-down"></i>
                </button>
               <div className="dropdown-content">
                    <a href="">Load</a>
                    <a href="">Save</a>
                  </div> 
            </div> 
            <a id="about" href="#about">About</a>
        </div> 
      </div>
    );
  }
}

export default App;
