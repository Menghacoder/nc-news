import axios from "axios";
//import { useParams } from "react-router-dom"

const baseURL = "https://nc-news-example-seminar-2-1.herokuapp.com/api";



export const getArticles = () => {
    
     return axios.get(`${baseURL}/articles`).then(( {data} ) => {

        return data.articles;
      });
      };

