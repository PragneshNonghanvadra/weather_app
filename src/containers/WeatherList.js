import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import Chart from "../components/Chart";
import Googlemap from "../components/GoogleMap";

class WeatherList extends Component {
  renderWeather = cityData => {
    if (cityData && cityData.city && cityData.city.name) {
      const name = cityData.city.name;
      const temps = _.map(
        cityData.list.map(weather => weather.main.temp),
        temp => temp - 273
      );
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);

      const lon = cityData.city.coord.lon;
      const lat = cityData.city.coord.lat;

      return (
        <tr key={name}>
          <td>
            <Googlemap lat={lat} lng={lon} />
            {/* <b>{name}</b> */}
          </td>
          <td>
            <Chart data={temps} units="&deg;C" color="orange" />
          </td>
          <td>
            <Chart data={pressures} units="hPa" color="green" />
          </td>
          <td>
            <Chart data={humidities} units="%" color="blue" />
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={"none"}>
          <td>City not found in US</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
      );
    }
  };

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (&deg;C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
