import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

class Map extends Component {
  render () {
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
    mapboxgl.accessToken = 'pk.eyJ1IjoiZnRzIiwiYSI6ImNqZmV5MXFiNjBkeTcyd2w5Y3VwMnl0bm8ifQ.YZI2zP4lgogzsOpSuXRPqg';
    let map = new mapboxgl.Map({
    container: 'testmap',
    style: 'mapbox://styles/mapbox/streets-v10'
    })
    return (
      <div id="testmap">
      </div>
    )
  }
}

export default Map