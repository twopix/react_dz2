import React, {Component} from 'react';
import "./Comment.css";




class Comment extends Component {

  handleDelete = () => {
    const {id, onDelete} = this.props;
    onDelete(id);
  }


  render() {
    return  (
      <p className="Comments">
        <span className="comment-text">{this.props.text}</span>
        <span onClick={this.handleDelete} className="delete">X</span>
      </p>
    );
  }
}

export default Comment;
