import React from "react";
import DataApi from "state-api";
import data from "../test-data.json";
import ArticleList from "./ArticleList";
import { DataProvider } from "../context";
import SearchBar from "./SearchBar";
import pickBy from "lodash.pickby";

console.log("Data value --->", data.data);
const api = new DataApi(data.data);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
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
  render() {
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
