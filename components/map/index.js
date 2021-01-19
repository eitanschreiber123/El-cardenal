import React, { Component } from 'react'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { MapContainer, TileLayer, LayersControl, Marker, MapControl, withLeaflet } from 'react-leaflet';
import fetch from 'isomorphic-unfetch'
class MyMap extends Component {
  constructor(props) {
    super(props);
}
  render() {return<MapContainer center={this.props.center}zoom={this.props.zoom}style={{height:"100%",height:"100%",zIndex:1}}><ReactLeafletGoogleLayer type={'satellite'}/>{this.props.markers.map(m=><Marker position={m.position}animate={true}></Marker>)}</MapContainer>}}
export default MyMap
