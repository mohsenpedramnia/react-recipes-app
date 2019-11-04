import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <Header title="free recipes">
        <Link
          to="/recipes"
          className="text-uppercase btn btn-lg btn-secondary mt-3"
        >
          search recipes
        </Link>
      </Header>
    );
  }
}
