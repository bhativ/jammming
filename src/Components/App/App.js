import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import SearchBar from './../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{name: 'Just an Illusion', artist: 'Imagination', album: 'In the Heat of the Night', id: '#456'},
                      {name: 'In the Heat of the Night', artist: 'Imagination', album: 'In the Heat of the Night', id: '#457'},
                      {name: 'Heart and Soul', artist: 'Imagination', album: 'In the Heat of the Night', id: '#458'}],
      playlistName: 'New Playlist',
      playlistTracks: [{name: 'In the Heat of the Night', artist: 'Imagination', album: 'In the Heat of the Night', id: '#457'}]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      this.setState({playlistTracks: track})
    }
  }
  removeTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      this.state.playlistTracks({playlistTracks: track})
    }
  }
  updatePlaylistName(name){
    this.setState({playlistName: name});
  }
  savePlaylist(){
    let trackURIs = this.state.playlistTracks.filter(track => typeof track.id === "string" );
  }
  search(){

  }
  render(){
    return(<div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
        </div>
      </div>
    </div>

    )
  }
}

export default App;
