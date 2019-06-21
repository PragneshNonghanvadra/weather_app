import React, { Component } from "react";
// import { GoogleMap, Marker } from "react-google-maps";

// export default class Googlemap extends Component {
//   componentDidMount() {
//     const google = window.google;
//     new google.maps.Map(this.refs.map, {
//       zoom: 12,
//       center: {
//         lat: this.props.lat,
//         lng: this.props.lng
//       }
//     });
//   }
//   render() {
//     return (
//       <div>
//         <GoogleMap
//           defaultZoom={12}
//           defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
//         >
//           <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
//         </GoogleMap>
//       </div>
//     );
//   }
// }

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: props.lat, lng: props.lng }} />
      )}
    </GoogleMap>
  ))
);

export default class Googlemap extends Component {
  render() {
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuLv4aZRFP5S-wsuKbSpsuszzmdoTUmHo"
        loadingElement={<div style={{ height: "100%", width: "100%" }} />}
        containerElement={<div style={{ height: "13rem", width: "14rem" }} />}
        mapElement={<div style={{ height: "100%", width: "100%" }} />}
        lat={this.props.lat}
        lng={this.props.lng}
      />
    );
  }
}

// export default props => {

//   return (
//       <GoogleMapLoader
//         containerElement={<div style={{ height: "100%" }} />}
//         googleMapElement={
//           <GoogleMap
//             defaultZoom={12}
//             defaultCenter={{ lat: props.lat, lng: props.lng }}
//           />
//         }
//       />
//   );
// };
