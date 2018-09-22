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
                
           
        <div className="titleBar">Jukebox</div>
        <div className="titleBottom"></div>
        <img src={require("./images/earbuds.jpeg")}  alt="earbuds"/>

        
        <div className="sidenav">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        <DirectoryFiles />
      </div>
    );
  }
}

export default App;
