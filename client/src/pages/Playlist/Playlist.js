import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import Panel from "../../components/Panel/Panel";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Song from "../../components/Song/Song";
import { List } from "../../components/List";

class Playlist extends Component {
    state = {
        songs: [],
        query:"",
    }

    handleInputChange = event => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    getSongs = () => {
        API.getSongs({
            query: this.state.query
        })
        .then(res =>
            this.setState({
                songs: res.data
            })
        )
        .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.prevenetDefault();
        this.getSongs();
    }

    render(){
        const songList = this.state.songs.map(song => {song.title})
        return(
            <div>
                <Container />
                <Panel>
                    <Form 
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        query={this.state.query}
                    />
                    <List> 
                        {this.state.songs.map(song => (
                            <Song
                            _id={song._id}
                            title={song.title}
                            artist={song.artist}
                            />
                    
                        ))}
                    </List>
                    />
                </Panel>
            </div>
        );
    }

}
export default Playlist;