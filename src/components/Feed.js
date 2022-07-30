import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import Article from "./Article";


function Feed(props) {
  const { data } = useContext(NewsContext);
  console.log(data)
  return (
    <div>
     {data
          ? data.articles.map((news) => (
              <Article data={news}
              key={news.url} 
             />
            ))
          : "Loading"}
    </div>
  )
}

export default Feed;