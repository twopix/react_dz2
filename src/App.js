import React, {Component,PureComponent} from 'react';
import "./App.css"


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

class App extends PureComponent {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    const val = event.target.value;
    this.setState({ inputValue: val });
    // console.log(val);
  };

  handleKeyDown = event=> {
    // console.log(event.keyCode);
    if (event.keyCode === 13) {
      this.setState({inputValue: ''})
    }
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <input
          value={inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="input"
        />
        <div className="Posts">
          <NewsPost />
        </div>
      </div>
    );
  }
}

export default App;
