import React, {Component} from 'react';
import "./NewsPost.css";
import Comment from "./Comment.js";

let id = 0;

function getId() {
  id += 1;
  return id;
}


class NewsPost extends Component {
  state = {
    commentInput: "",
    comments: []
  };

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
    // console.log(val);
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { commentInput, comments } = this.state;
      const newComment = { text: commentInput, id: getId() };

      this.setState({
        commentInput: "",
        comments: [...comments, newComment]
      });
    }
  };

  handleDelete = event => {
    this.setState(state=>({
      comments: state.comments.filter(comment=>id !== comment.id)
    }));
  };

  render() {
    const { commentInput, comments } = this.state;
    return <div className="news-post">
        <p>{this.props.text}</p>
        <div>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              text={comment.text}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
        <input className="comment-input" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={commentInput} />
      </div>;
  }
}

export default NewsPost;
