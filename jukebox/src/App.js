import React, { Component } from 'react';
import './App.css';
import "./css_sheet.css";





class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {name: props.data, 
                  artist: '',
                  album: '',
                  year: '',
                  genre: ''}
  }

  playSong() {
    console.log('method ran');
    fetch('/api/play_song', {
      headers: {"Content-Type": "application/json"},
      method: 'POST',
      body: JSON.stringify({'name': this.state.name})
    });
  }

  render() {
    return (
      <div onDoubleClick={() => this.playSong()}>{this.state.name}</div>
    );
  }

}


class DirectoryFiles extends Component {

  constructor(props) {
    super(props);
    this.state = {songList: ''};
  }

  componentDidMount(){
    fetch('/api/music_dir', {
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .then((json) => this.setState(json));
  }

  render() {
    let songComponents = [];
    for (let song of this.state.songList) {
      songComponents.push(<Song data={song} />);
    }
    return (
      <div>Songs: {songComponents}</div>
    );
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
