import React from "react";
import Film from "./film";

class FilmList extends React.Component {

  render() {

      const filmNodes = this.props.data.map(function (film) {
        return(
          <Film filmtitle={film.filmtitle} key={film.id}>
            {film.text}
          </Film>
        )
      })


    return (
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }

}

export default FilmList;
