import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import Article from "./Article";


function Feed() {


  const { data } = useContext(NewsContext);
  console.log(data)


  return (

    <div className="feed-container">
      {data ? data.articles
        .sort((a, b) => (a.title > b.title ) ? 1 : -1)
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