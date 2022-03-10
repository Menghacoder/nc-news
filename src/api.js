import axios from "axios";
//import { useParams } from "react-router-dom"

const baseURL = "https://nc-news-example-seminar-2-1.herokuapp.com/api";



export const getArticles = (topic) => {
    
     return axios.get(`${baseURL}/articles`,{params:{topic:topic}}).then(( {data} ) => {

        return data.articles;
      });
      };


export const getTopicArticles = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  }) 
}

