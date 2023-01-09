import React from "react";
import DataApi from "../DataApi";
import data from "../test-data.json"
import ArticleList from "./ArticleList";

console.log("Data value --->",data.data)
const api = new DataApi(data.data);
class App extends React.Component{
    constructor(){
        super();
        this.state={
            articles:api.getArticles(),
            authors:api.getAuthors(),
        }
    }
    articleActions={
        lookupAuthor: authorId => this.state.authors[authorId]
    }
    render(){
        return(
            <ArticleList
            articles={this.state.articles}
            // authors={this.state.authors}
            articleActions={this.articleActions}
            />
        )
    }
}
export default App;