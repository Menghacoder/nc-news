import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import SingleArticleCard from "./SingleArticleCard";

export default function ArticleList(){
    const {topic} = useParams();
    const [articles, setArticles] = useState([]);
    const [article_id, setArticle_id] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    
useEffect(() => {
         setisLoading(true);
        console.log("component mounted")

        api.getArticles(topic).then((data) => {
            setArticles(data)

         setisLoading(false);

        })
    }, [topic]);
        
        return (
            <div>
             {articles.map(({article_id, topic, author, body, created_at}) => {


            return(            
            <section className="Homepage_articleList">
            <Link to= {`/articles/${article_id}`}>     

                <ArticleCard 
                key={article_id}
                topic={topic}
                author={author}
                body={body}
                created_at={created_at}
                    />
            </Link> 
            <button>
                Display!
            </button>
            </section>
            )
           
                  })};
  

            </div>
             );
    }