import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Title from './components/Title';
import ArticleList from './components/ArticleList';
import './App.css';
import TopicArticles from './components/TopicArticles';
import { useState } from 'react';

function App() {
  const [topic, setTopic] = useState();
  return (
    <BrowserRouter>
    <div className="App">
    <Title/>

      <section >
      <ul>
      <h2><Link to="/articles">View Articles</Link></h2>
      </ul>
      </section>
      <br/>
      <Routes>
      <Route path='/articles' element = {<TopicArticles/>} />
      <Route path='/topics/:topic' element = {<TopicArticles setTopic={setTopic}/>} />

      </Routes>

      <ArticleList topic={topic}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
