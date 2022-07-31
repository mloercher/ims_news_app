import React from 'react'
import './article.css'

function Article({data}) {

  return (
    <div className='news-app'>
      <div className='news-item'>
       <h3 className='news-title'>{data.title}</h3>
       <a href={data.url}><img className="news-img" src={data.urlToImage} alt={data.urlToImage}></img></a>
       <p className='news-description'>{data.description}</p>
       <p>{data.publishedAt}</p>
       </div>
    </div>
  )
}

export default Article