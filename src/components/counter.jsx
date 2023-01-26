import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDelete = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Plese create new tags!"}
        <button
          onClick={() => this.handleDelete()}
          className="btn btn-sm m-2 btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }

  // {this.renderTags()} ----> was deleted in the last of the div tag
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "text-bg-warning" : "text-bg-primary"; // if the count is zero, make the badge in warning, other wise make it a primary key
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
