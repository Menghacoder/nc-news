import{BrowserRouter, Router, Routes, Link, useParams} from 'react-router-dom';
import React, {useState, useEffect}  from "react";
import * as api from "../api"

export default function TopicArticles({setTopic}) {
    const {topic} = useParams();
    setTopic(topic)
    const [topicArticles, setTopicArticles] = useState([])
    const [isLoading, setisLoding] = useState(true);

    useEffect(() => {
        setisLoding(true);
            api.getTopicArticles().then((data) => {
                setTopicArticles(data);
                setisLoding(false)
            });
    }, []);

if (isLoading) {
    return <p>loading...</p>;
}else {
    return topicArticles.map((topicArticles) => {
        const topicsPath = `/topics/${topicArticles.slug}` 
        return(
            <section >
              <h3> <Link to= {topicsPath}>  
                {topicArticles.slug}
                
                </Link></h3>
            </section>
        );
    })
} 
   
}


