import React from "react";
import Article from"./Article";
import SearchBar from "./SearchBar";

const ArticleList=(props)=>{
return(
    <div>
        {Object.values(props.articles).map((article)=>{
        return(<Article
        key={article.id}
        article={article}
        // actions={props.articleActions}
        />)
    })}
    </div>
)
}

export default ArticleList;