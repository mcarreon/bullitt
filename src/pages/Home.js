import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import nav from '../assets/hamburger.png';
import aw from '../assets/photos/andersonwright.png';
import al from '../assets/photos/anthonyleonardi.png';
import cv from '../assets/photos/candicevernon.png';
import dd from '../assets/photos/drakedoremus.png';
import jl from '../assets/photos/justinlin.png';
import lc from '../assets/photos/larrycharles.png';
import mo from '../assets/photos/mattogens.png';
import pw from '../assets/photos/peytonwilson.png';

const gridItems = [{
  name: "Anderson Wright",
  img: aw
},{
  name: "Anthony Leonardi",
  img: al
},{
  name: "Candice Vernon",
  img: cv
},{
  name: "Drake Doremus",
  img: dd
},{
  name: "Justin Lin",
  img: jl
},{
  name: "Larry Charles",
  img: lc
},{
  name: "Matt Ogens",
  img: mo
},{
  name: "Peyton Wilson",
  img: pw
}];


export default class Home extends Component {
  
  state = {
    gridItems: gridItems
  }
  
  render() {
    return (
      <div className="home">
        <header>
          <h1>BULLITT</h1>
          <nav>
            <img src={nav} alt="nav hamburger"></img>
          </nav>
        </header>
        <section>
          <div className="home-title">
            <h2>Talent</h2>
          </div>
          <div className="home-grid">
            {this.state.gridItems.map(item => {

              let backgroundStyle = {
                backgroundImage: `url(${item.img})`
              }
              let linkPath = item.name.replace(' ', '');
              
              return (
                <Link to={{
                  pathname: `/video/${linkPath}`,
                  state: { name: item.name }
                }} key="linkPath">
                  <div className="grid-item" style={backgroundStyle}>
                    <h3>{item.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    )
  }
}
