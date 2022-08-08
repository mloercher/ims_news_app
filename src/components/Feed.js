import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import Article from "./Article";
import './feed.css'


function Feed() {

// importing data fetched in NewsContext.js 
  const { data } = useContext(NewsContext);
  console.log(data)


  return (

    <div className="feed-container">
      {data ? data.articles
      // sorting articles in order of newest to oldest from top to bottom 
        .sort((a, b) => (a.publishedAt > b.publishedAt ) ? 1 : -1)
        .map((newsStory) => (
          <Article data={newsStory}
            key={newsStory.url}
          />
        ))
        : "Loading"}
    </div>
  )
}

export default Feed;