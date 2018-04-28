const axios = require("axios");
const db = require("../models");
const Spotify = require('node-spotify-api');

module.exports = {
    findAll: function(req, res){
        const params = Object.assign(
            {id:"a20742a380c94395ab40a887325d857f"},{secret:"3d5603460a1346f6852f8ba0e72f1716"},
        req.query
    );
    axios
        .get("https://api.spotify.com/v1/search", {
            params
        })
        .then(response => {
            db.Song
                .find()
                .then(dbSongs =>
                    response.data.docs.filter(song =>
                        dbSongs.every(
                            dbSongs => dbSong._id.toString() !== song.id
                        )
                    )
                )
                .then(songs => res.json(songs))
            .catch(err => res.status(422).json(err));
        });
    }
};