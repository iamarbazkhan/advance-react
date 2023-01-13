import React from "react";
import DataApi from "state-api";
import data from "../test-data.json";
import ArticleList from "./ArticleList";
import { DataProvider } from "../context";
import SearchBar from "./SearchBar";
import pickBy from "lodash.pickby";
import TimeStamp from "./TimeStamp";
console.log("Data value --->", data.data);
const api = new DataApi(data.data);
class App extends React.Component {
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  state = api.getState();
  onApiDataChange = () => {
    this.setState(api.getState());
  };
  componentDidMount() {
    this.subscriptionId = api.subscribe(this.onApiDataChange);
  }
  componentWillUnmount() {
    api.unSubscribe(this.subscriptionId);
  }
  //   setSearchTerm = (searchTerm) => {
  //     this.setState({ searchTerm });
  //   };
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.articles !== nextState.articles ||
      this.state.searchTerm !== nextState.searchTerm
    );
  }

  render() {
    console.log("App call");
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value, key) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      // Sending data through context provider
      <DataProvider
        value={{
          values: this.state,
          articleActions: this.articleActions,
        }}
      >
        <TimeStamp timestamp={this.state.timestamp} />
        <SearchBar doSearch={api.setSearchTerm} />
        <ArticleList
          articles={articles}
          // authors={this.state.authors}
          articleActions={this.articleActions}
        />
      </DataProvider>
    );
  }
}
export default App;
