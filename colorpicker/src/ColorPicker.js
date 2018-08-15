import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hue: 50,
      saturation: 8,
      lightness: 20
    }
  }


  HueUpdated = (event) => {
    console.log('Updated Hue')

  }

  SatUpdated = (event) => {
    console.log('Updated Saturation')

  }

  LightUpdated = (event) => {
    console.log('Updated Light')

  }

  updateHue = (event) => {
    const newHue = event.target.value
    this.setState({
      hue: newHue
    })

    const parent = document.querySelector('.details')
    parent.textContent = ''
    const span2 = document.createElement('span')
    span2.textContent = ('Hue:' + newHue)
    parent.appendChild(span2)


  }

  updateSat = (event) => {
    const newSat = event.target.value
    this.setState({
      saturation: newSat
    })

    const parent = document.querySelector('.details2')
    parent.textContent = ''
    const span3 = document.createElement('span')
    span3.textContent = ('Saturation:' + newSat)
    parent.appendChild(span3)


  }

  updateLight = (event) => {
    const newLight = event.target.value
    this.setState({
      lightness: newLight
    })

    const parent = document.querySelector('.details3')
    parent.textContent = ''
    const span4 = document.createElement('span')
    span4.textContent = ('Lightness:' + newLight)
    parent.appendChild(span4)

  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%, ${this.state.lightness}%)` }} className="output"></div>
        <section>
          <input title="Hue" type="range" min="0" max="360" onChange={this.HueUpdated} onInput={this.updateHue} value={this.state.hue}></input>
        </section>
        <section>
          <input title="Saturation" type="range" min="0" max="100" onChange={this.SatUpdated} onInput={this.updateSat} value={this.state.sat}></input>
        </section>
        <section>
          <input title="Lightness" type="range" min="0" max="100" onChange={this.LightUpdated} onInput={this.updateLight} value={this.state.light}></input>
        </section>
        <span className="details">
        </span>
        <span className="details2">
        </span>
        <span className="details3">
        </span>
      </div>
    );
  }
}

export default ColorPicker;
