import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Counter from "./components/counter";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncreament = (counter) => {
    const counters = [...this.state.counters]; // for i in this.state.counters
    const index = counters.indexOf(counter);

    counters[index] = { ...counter }; // for x in counter (key, value pair)
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDecrease = (counter) => {
    const counters = [...this.state.counters]; // for i in this.state.counters
    const index = counters.indexOf(counter);

    counters[index] = { ...counter }; // for x in counter (key, value pair)

    // if the count is zero do not decrease.
    if (counters[index].value === 0) {
      // pass
    } else {
      counters[index].value--;
    }

    this.setState({ counters });
  };

  handleAddItem = () => {
    const counters = this.state.counters.slice();
    let i = 0;
    while (i < counters.length) {
      counters[i].id = i + 1;
      i++;
    }
    const newCounter = { id: counters.length + 1, value: 0 };
    counters.push(newCounter);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncreament}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
            onAddItem={this.handleAddItem}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
