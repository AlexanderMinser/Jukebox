import React, { Component } from 'react';
import './App.css';
import "./css_sheet.css";




class DirectoryFiles extends Component {

  constructor(props) {
    super(props);
    this.state = {fileList: null};
  }

  fetchData(){
    fetch('/api/music_dir', {
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.text())
    .then(function(text) {
      console.log(text);
      return text; 
    })
    .then((text) => this.setState({fileList: text}));
  }

  render() {
    if (this.state.fileList === null) {
      return (
        <div>
          <input type="text" placeholder="p-holder"></input>
          <input type="submit" name="subbutton" value="submit" onClick={this.fetchData()}></input>
        </div>
      );
    } else {
      return (
        <p>Seleted dir: {this.state.fileList}</p>
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
        <style>{'body { background-color: teal; }'}</style>
                
        <header>
            <title>Jukebox App</title>
           
        </header>
        <h1 className="titleBar">Welcome to my music player!</h1>

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
        <DirectoryFiles />
      </div>
    );
  }
}

export default App;
