import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h4 className="text-light text-uppercase">
          you are in the wrong place
        </h4>
        <Link to="/" className="text-uppercase btn btn-lg btn-secondary mt-3">
          return home
        </Link>
      </Header>
    );
  }
}
