import React, {Component} from 'react';
import "./App.css"
import NewsPost from "./NewsPost.js";

let id = 0;

function getId() {
  id += 1;
  return id;
}


class App extends Component {
  state = {
    newsInput: "",
    news: []
  };

  handleChange = event => {
    this.setState({newsInput: event.target.value});
    // console.log(val);
  };

  handleKeyDown = event=> {
    if (event.keyCode === 13) {
      const { newsInput, news } = this.state;
      const newPost = { text: newsInput, id: getId() };

      this.setState({
        newsInput: "",
        news: [...news, newPost]
      });
    }
  };

  render() {
    const { newsInput, news} = this.state;
    return (
      <div className="App">
        <input 
          value={newsInput} 
          onChange={this.handleChange} 
          onKeyDown={this.handleKeyDown} 
          className="news-input" />
        <div className="Posts">
          {news.map(item => 
              <NewsPost text={item.text} key={item.id}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
