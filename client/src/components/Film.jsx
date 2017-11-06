import React from "react";

class Film extends React.Component {

  render() {

    return (
      <div className="film">
        <h4 className="showtime">
          {this.props.filmtitle}
        </h4>
        {this.props.children}
      </div>
    )
  }

}

export default Film;
