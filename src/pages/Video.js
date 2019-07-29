import React, { Component } from 'react'
import nav from '../assets/hamburger.png';
import { isAbsolute } from 'path';

export default class Video extends Component {
  render() {

    return (
      <div className="video">
        <header>
          <h1>BULLITT</h1>
          <nav>
            <img src={nav}></img>
          </nav>
        </header>
        <section>
          <div>title</div>
          <div>
            <iframe src="https://player.vimeo.com/video/331414823?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div>close</div>
        </section>
        <footer>
          <h2>Rocket Mortgage</h2>
          <p>Avengers Infinity War the Mortgage Process Doesn't Have to Be a Battle</p>
        </footer>
      </div>
    )
  }
}
