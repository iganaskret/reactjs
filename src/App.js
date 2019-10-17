import React, { useState, useEffect } from "react";
import "./profile.css";
import "./App.css";
import Header from "./Header.js";
import Feed from "./Feed.js";
import Footer from "./Footer.js";

import Button from "muicss/lib/react/button";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function App() {
  // const user = "Iga Marianna"; //pass to Profile
  // const [posts, setPosts] = useState([
  //   {
  //     author: "Iga",
  //     subject: "cats"
  //   }
  // ]); //pass to Feed

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const baseURL = "https://bandsdatabase-76bc.restdb.io/rest/posts/";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887ce8fd86cb75861e2623",
      "cache-control": "no-cache"
    };
    fetch(baseURL + "posts?fetchchildren=true", {
      method: "get",
      headers: headers
    })
      .then(e => e.json())
      .then(e => setPosts(e));
  }, []);

  function addPost(data) {
    const copy = posts.concat(data);
    setPosts(copy);
  }
  return (
    <div className="App">
      <SkeletonTheme highlightColor="#fff">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>

      <Header name="Iga" />
      <Button variant="raised" color="danger" onClick={addPost}>
        Add post
      </Button>
      <Feed posts={posts} />
      {/* {posts.length && .... skeleton} */}
      <Footer />
    </div>
  );
}

export default App;
