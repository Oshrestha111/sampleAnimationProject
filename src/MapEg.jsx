import { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
class MapEg extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={{ lat: 27.717245, lng: 85.323959 }}
        style={{
          width: "30%",
          height: "30%",
        }}
      >
        <Marker position={{ lat: 27.717245, lng: 85.323959 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC_-4f_RRBI-9BDQX4vK4_K2HJqJinxN04",
})(MapEg);
