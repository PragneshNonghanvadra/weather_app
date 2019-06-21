import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
import "../App.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: "" };
  }

  handleSubmit = e => {
    console.log(this.state.term);
    this.props.fetchWeather(this.state.term);

    e.preventDefault();
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            placeholder="Get five Day forecast in your favourite cities"
            className="form-control"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            style={{ margin: "2rem", marginRight: "4rem" }}
          />
          <span className="input-group-btn">
            <button
              type="submit"
              className="btn btn-secondary"
              style={{ margin: "2rem", marginLeft: "-4rem" }}
            >
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
