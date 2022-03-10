import React from "react";
//import * as api from '..api'
export default function ArticleCard({title,topic ,author, body, created_at}){
    return(
        <li className="articleCard">
        <h3>{title}</h3>
        <dl>
        <p>topic: {topic}</p>
        <p>author: {author}</p>
        <p>created_at: {created_at}</p>
        </dl>
        </li>



    )

}
