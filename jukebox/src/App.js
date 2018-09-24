import React, { Component } from 'react';
import './App.css';
import "./css_sheet.css";





class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {fileName: props.data,
                  name: props.data.substr(0, props.data.length-4), 
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
      <div className="song" onDoubleClick={() => this.playSong()}>{this.state.name}</div>
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
      <div>
        <div className="song">Songs:</div>
        <div>{songComponents}</div>
      </div>
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
       {/* <style>{'body { background-color: teal; }'}</style>        
          */}      
        <div className="parallax">
          <div className="titleBar">Jukebox</div>
          <div className="titleBottom"></div>
        
          {/*<img src={require("./images/buildings.jpg")}  height={"10%"} width={"100%"} alt="earbuds"/>
          */}
         
          <DirectoryFiles />
        </div>
        <div className="sidenav">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        
      </div>
    );
  }
}

export default App;
