import React from "react";
// import * as api from '..api'
export default function ArticleCard({title,topic ,author}){
    return(
        <article>
            <h3>{title}</h3>
            <p>topic: {topic}</p>
            <p>author: {author}</p>
        </article>
    )

}
