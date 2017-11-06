import React from "react";
import FilmList from "./FilmList";
import Button from "./Button";

class FilmBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{id: 1, filmtitle: "Thor- Ragnarok", text: "showtimes"},
            {id: 2, filmtitle: "Murder on the Orient Express", text: "showtimes"},
            {id: 3, filmtitle: "Jigsaw", text: "showtimes"},
            {id: 4, filmtitle: "Bladerunner 2049", text: "showtimes"},
            {id: 5, filmtitle: "The Death of Stalin", text: "showtimes"},
            {id: 6, filmtitle: "Geostorm", text: "showtimes"},
            {id: 7, filmtitle: "Breathe", text: "showtimes"},]
    }
  }

  render() {
    return (
      <div className="film-box">
        <h2>UK Opening This Week</h2>
        <FilmList data={this.state.data}/>
        <Button/>
      </div>
    )
  }




}

export default FilmBox;
