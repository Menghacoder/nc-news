import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import Title from './components/Title';
import ArticleList from './components/ArticleList';
import './App.css';

import TopicArticles from './components/TopicArticles';
import { useState } from 'react';
import SingleArticleCard from './components/SingleArticleCard';

function App() {
  const [topic, setTopic] = useState();
  console.log(topic)
  return (
    <BrowserRouter>
    <div className="App">
    <Title/>

      <section >
      <ul>
      <h2><Link to="/articles">View topics</Link></h2>
      </ul>
      </section>
      <br/>
      <Routes>
      <Route path='/articles' element = {<TopicArticles setTopic={setTopic}/>} />
      <Route path='/' element = {<ArticleList/>}/>
      <Route path='/topics/:topic' element = {<ArticleList/>} />
      <Route path='/articles/:article_id' element= {<SingleArticleCard/>}/>

      </Routes>

      {/* <ArticleList topic={topic}/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
