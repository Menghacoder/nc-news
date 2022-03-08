import React from "react";
import { useState, useEffect } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";


export default function ArticleList(){
    const [articles, setArticles] = useState([]);
    const [isLoading, setisLoding] = useState(true);
    useEffect(() => {
         setisLoding(true);
        
        console.log("component mounted")

        api.getArticles().then((data) => {

            setArticles(data)
            console.log(data)
            console.log(data.articles.length)
         setisLoding(false);

        })
    }, []);
    return articles.map(({article_id, topic, author, body, created_at}) => {

        return (
            <div>
                <ArticleCard 
                key={article_id}
                topic={topic}
                author={author}
                body={body}
                created_at={created_at}
                    />
            </div>
             );
        });
    }



