import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Translate, withLocalize } from 'react-localize-redux'
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet-universal'

class Map extends Component {
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
      position: { latitude, longitude },
      currentPosition: {
        latitude: markLatitude,
        longitude: markLongitude,
      },
      zoom,
    } = this.props

    return (
      <div id="maps">
        <LeafletMap
          center={[latitude, longitude]}
          zoom={zoom}
          maxZoom={10}
          attributionControl
          doubleClickZoom
          scrollWheelZoom
          zoomControl={false}
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
            <Popup><Translate id="maps.markerPosition" /></Popup>
          </Marker>
        </LeafletMap>
      </div>
    )
  }
}

Map.propTypes = {
  position: propTypes.objectOf.isRequired,
  currentPosition: propTypes.objectOf.isRequired,
  zoom: propTypes.objectOf.isRequired,
  viewportChanged: propTypes.func.isRequired,
  history: propTypes.objectOf.isRequired,
}

export default withLocalize(Map)
