import React, { Component } from "react";
import debounce from "lodash.debounce";
export default class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm)
  }, 300);
  handleChange = (event) => {
    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => {
        this.doSearch();
      }
    );
  };

  render() {
    return (
      <input
        type="search"
        placeholder="Enter search value"
        onChange={this.handleChange}
      />
    );
  }
}
