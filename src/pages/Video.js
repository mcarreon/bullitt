import React, { Component } from 'react'
import nav from '../assets/hamburger.png';
import { Link } from 'react-router-dom';

export default class Video extends Component {

  render() {

    let { name } = this.props.location.state;

    return (
      <div className="video">
        <header>
          <h1>BULLITT</h1>
          <nav>
            <img src={nav} alt="Hamburger Nav"></img>
          </nav>
        </header>
        <section>
          <div className="video-talent">
            <p><span>TALENT</span> {name}</p>
          </div>
          <div className="video-player">
            <iframe src="https://player.vimeo.com/video/245032412?title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Vimeo Avengers"></iframe>
          </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          <div className="video-close">
            <Link to="/home">
              <p>CLOSE</p>
            </Link>
          </div>
        </section>
        <footer>
          <h2>Rocket Mortgage®</h2>
          <p>Avengers Infinity War the Mortgage Process Doesn't Have to Be a Battle</p>
        </footer>
      </div>
    )
  }
}
