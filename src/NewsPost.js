import React, {Component} from 'react';
import "./NewsPost.css";


class NewsPost extends Component {
  render() {
    const posts = [
      { text: "hello!", author: "Bill" },
      { text: "How are you?", author: "Mary" }
    ];
    return (
      <ul>
        {posts.map(post => {
          return <post author={post.author} text={post.text} />;
        })}
      </ul>
    );
  }
}

export default NewsPost;
