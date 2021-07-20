import { useState, useEffect } from "react";
import "./App.scss";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Post from "./components/Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          title: doc.data().title,
          message: doc.data().message,
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="app-posts">
        <CreatePost posts={posts} setPosts={setPosts} />
        {posts
          .filter(
            (post) =>
              post.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              post.message
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
          .map((post) => (
            <Post
              key={post.id}
              keyValue={post.id}
              title={post.title}
              message={post.message}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
