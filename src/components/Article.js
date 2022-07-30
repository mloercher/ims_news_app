import React from 'react'

function Article({data}) {

  return (
    <div>
       <h1>{data.title}</h1>
       <a href={data.url}><img className="news-img" src={data.urlToImage} alt={data.urlToImage}></img></a>
       <p>{data.description}</p>
    </div>
  )
}

export default Article