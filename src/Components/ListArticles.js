import React from "react";
import CardArticle from "./CardArticles";
function ListArticles (props) {
    if(!props){
        return <div><h1>Pas d'article</h1></div>
    }else{
        const articlesListing = props.articles.map((articles)=> <CardArticle name={articles.name} price={articles.price} />)
        return (
            <div>
                {articlesListing}    
            </div>
        )
    }

}

export default ListArticles