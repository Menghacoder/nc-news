import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../api'
export default function SingleArticleCard({title,topic ,author, body, created_at}){
    const [singleArticle, setSingleArticle] = useState({});
    const {article_id} = useParams();
    console.log(article_id,'<=========')
useEffect(() =>{
    api.displaySingleArticle(article_id).then((newArticle) => {
        setSingleArticle(newArticle)
        })
    },[]);
    

    return(
        <li className="singleArticleCard">
        <h3>{singleArticle.title}</h3>
        {/* <dl>
        <p>body: {body}</p>
        <p>topic: {topic}</p>
        <p>author: {author}</p>
        <p>created_at: {created_at}</p>
        </dl> */}
        </li>



    )

}
