import React from 'react';
import '../styles/index.css'

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('previous props - ', prevProps);
    console.log('previous state - ', prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    const classNames = ["badge"];
    if(this.props.counter.value === 0) classNames.push("badge-warning");
    return classNames.join(" ");
  }

  render() {
    console.log('Counter - Rendered');

    const counter = this.props.counter;

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(counter)}>
          Increment
        </button>
        <button 
          onClick={() => this.props.onDelete(counter.id)} 
          className={["delete"].join(" ")}>Delete</button>
      </div>
    );
  }
}

export default Counter;