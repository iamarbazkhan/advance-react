import React from "react";
import DataApi from "state-api";
import data from "../test-data.json"
import ArticleList from "./ArticleList";
import {DataProvider} from "../context";

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
            // Sending data through context provider
            <DataProvider value={{
                values:this.state,
                articleActions:this.articleActions
            }}>
            <ArticleList
            articles={this.state.articles}
            // authors={this.state.authors}
            articleActions={this.articleActions}
            />
            </DataProvider>
        )
    }
}
export default App;