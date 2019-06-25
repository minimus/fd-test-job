import React, { Component } from 'react'
import propTypes from 'prop-types'
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet-universal'

export default class Map extends Component {
  handleViewportChanged = (vp) => {
    const {
      history, viewportChanged, currentPosition,
    } = this.props
    const { center: [latitude, longitude] } = vp
    if ((currentPosition.latitude && currentPosition.latitude !== latitude)
      || (currentPosition.longitude && currentPosition.longitude !== longitude)) {
      history.push(`/${latitude}/${longitude}`)
    }
    viewportChanged(vp)
  }

  render() {
    const {
      position, currentPosition, locale, zoom, strings,
    } = this.props
    const { latitude, longitude } = position
    const { latitude: markLatitude, longitude: markLongitude } = currentPosition
    const { maps: { markerPosition } } = strings
    return (
      <div id="maps">
        <LeafletMap
          center={[latitude, longitude]}
          zoom={zoom}
          maxZoom={10}
          attributionControl
          zoomControl
          doubleClickZoom
          scrollWheelZoom
          dragging
          animate
          easeLinearity={0.35}
          style={{ width: '100%', height: '100%' }}
          onViewportChanged={this.handleViewportChanged}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[markLatitude, markLongitude]}>
            <Popup>{markerPosition}</Popup>
          </Marker>
        </LeafletMap>
      </div>
    )
  }
}

Map.propTypes = {
  locale: propTypes.string.isRequired,
  position: propTypes.objectOf.isRequired,
  currentPosition: propTypes.objectOf.isRequired,
  zoom: propTypes.objectOf.isRequired,
  viewportChanged: propTypes.func.isRequired,
  history: propTypes.objectOf.isRequired,
  strings: propTypes.objectOf.isRequired,
}
