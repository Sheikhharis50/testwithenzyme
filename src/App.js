import React from "react";
import "./App.css";
import Header from "./components/header";
import Headline from "./components/headline";
import Form from "./components/form";
import UserInfo from "./components/form/userInfo";
import ListItem from "./components/listItem";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "./store/actions";

function App() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = (limit = 10) => {
    if (posts.length) return;
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(addPosts(data));
      });
  };

  return (
    <div className="App">
      <Header />
      <section className="main">
        <div className="table">
          <div className="row">
            <div className="col">
              <h3>Headline Testing</h3>
              <hr />
              <Headline {...headlineProps} />
              {posts.map((item, index) => {
                return (
                  <ListItem key={index} title={item.title} desc={item.body} />
                );
              })}
            </div>
            <div className="col">
              <h3>Form Testing</h3>
              <hr />
              <Form />
              <UserInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const headlineProps = {
  header: "Post",
  desc: "Click the button to render the component!",
};

export default App;
