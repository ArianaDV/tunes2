import React from "react";
import { ListSong } from "../List";

const Song = ({ title, _id, artist, handleClick }) => (
  <ListSong>
    <h3>
      <em>{title}</em>{" "}
      <span className="btn-group pull-right">
        <a
          className="btn btn-light"
          artist={artist}
        >
        Songs
        </a>
        <button onClick={() => handleClick(_id)} className="btn btn-primary">
          {}
        </button>
      </span>
    </h3>
  </ListSong>
);

export default Song;