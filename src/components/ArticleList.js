import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

export default function ArticleList({topic}){
    const [articles, setArticles] = useState([]);
    const [isLoading, setisLoding] = useState(true);
   
    useEffect(() => {
         setisLoding(true);
        
        console.log("component mounted")

        api.getArticles(topic).then((data) => {

            setArticles(data)
         setisLoding(false);

        })
    }, [topic]);
    return articles.map(({article_id, topic, author, body, created_at}) => {
        

        return (
      

            <section className="Homepage_articleList">
            
                <ArticleCard 
                key={article_id}
                topic={topic}
                author={author}
                body={body}
                created_at={created_at}
                    />
            </section>
             );
        });
    }



