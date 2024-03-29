import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleSubmit, handleChange, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              search recipes with{" "}
              <strong className="color-orange">Food2Fork</strong>
            </h1>
            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                types recipes seprated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="chicken,onion,carrot"
                  className="form-control"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
