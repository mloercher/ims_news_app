import React, {useContext} from "react";
import { NewsContext } from "../NewsContext";


function Feed(props) {
    const {data} = useContext(NewsContext);
  return (
    <div>Feed</div>
  )
}

export default Feed;