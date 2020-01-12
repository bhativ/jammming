import React from 'react';
import './Playlist.css';
import TrackList from './../TrackList/TrackList'

class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e){
    let input = e.target.value;
    this.props.onNameChange(input)
  }
  render(){
    return(<div className="Playlist">
      <input defualtValue={'New Playlist'} onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>)
    }
}

export default Playlist;