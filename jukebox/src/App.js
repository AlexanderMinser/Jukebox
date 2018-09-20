import React, { Component } from 'react';
import './App.css';
import "./css_sheet.css";




class DirectoryBar extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedDir: null};
  }

  fetchData(){
    fetch('/api', {
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .then((json) => this.state = json)
  }

  render() {
    if (this.state.selectedDir === null) {
      return (
        <div>
          <input type="text" placeholder="p-holder"></input>
          <input type="submit" name="subbutton" value="submit" onClick={this.fetchData()}></input>
        </div>
      );
    } else {
      return (
        <p>Seleted dir: {this.selectedDir}</p>
      );
    }
    
  }

}




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '', 
      date: new Date()
    };
  }
  

  componentDidMount() {
    fetch('/api', {
      headers: {"Content-Type": "application/json"}
    })
      .then((res) =>
        res.json()
      )
      .then((json) => 
        console.log(json)
      );
  } 

  render() {
    
    return (
      <div className="App">
                
        <header>
            <title>Jukebox App</title>
        </header>
        <h1>Welcome to my music player!</h1>

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
        <DirectoryBar />
      </div>
    );
  }
}

export default App;
