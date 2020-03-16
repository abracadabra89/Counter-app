import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterOne: 0,
	  counterTwo: 0,
	  counterThree: 0
    };
  }
  render() {
    return (
      <div>
        <section>
          <pre className="tab">
            <p>
              <h6>Counter One</h6>
              <button
                onClick={() =>
                  this.setState({ counterOne: this.state.counterOne + 1 })
                }
              >
                -
              </button>
              <button
                onClick={() =>
                  this.setState({ counterOne: this.state.counterOne - 1 })
                }
              >
                +
              </button>
        {this.state.counterOne}
            </p>
            <h6>Counter Two</h6>
            <p>
              <button
                onClick={() =>
                  this.setState({ counterTwo: this.state.counterTwo + 1 })
                }
              >
                -
              </button>
              <button
                onClick={() =>
                  this.setState({ counterTwo: this.state.counterTwo - 1 })
                }
              >
                +
              </button>
              {this.state.counterTwo}
            </p>
            <h6>Counter Three</h6>
            <button
              onClick={() =>
                this.setState({ counterThree: this.state.counterThree + 1 })
              }
            >
              -
            </button>
            <button
              onClick={() =>
                this.setState({ counterThree: this.state.counterThree - 1 })
              }
            >
              +
            </button>
            {this.state.counterThree}
            <p>
              <button
                onClick={() =>
                  this.setState({
                    counterOne: this.state.counterOne + 1,
                    counterTwo: this.state.counterTwo + 1,
                    counterThree: this.state.counterThree + 1
                  })
                }
              >
                increase all
              </button>
              <button
                onClick={() =>
                  this.setState({
                    counterOne: this.state.counterOne - 1,
                    counterTwo: this.state.counterTwo - 1,
                    counterThree: this.state.counterThree - 1
                  })
                }
              >
                decrease all
              </button>
            </p>
			</pre>
        </section>
      </div>
    );
  }
}

  
export default Counter;