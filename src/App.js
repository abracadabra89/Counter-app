import React from "react";
import Counter from './components/Counter'

class App extends React.Component {
  render(){
    return (
      <div className="title">
        <h1>Counter App</h1>
        <Counter />
        <ul>
          <h4>INSTRUCTIONS:</h4>

          <li> Make an app showing 3 counters that start at 0 </li>

          <li>Every counter has a + and a - button</li>
          <li>
            Clicking on + will increase the count number on that single counter
          </li>
          <h4>BONUS:</h4>
          <li>
            The page will have 2 extra buttons "decrease all" and "increase all"
          </li>
          <li>
            Clicking on "increase all" will increase the count by 1 on all the
            counters
          </li>
          <li>
            Clicking on "decrease all" will decrease the count by 1 unit on all
            the counters
          </li>

          <h4>NOTES:</h4>
          <li>
             you may use create-react-app to bootstrap the outline of the
            application
          </li>
          <li> no redux to be used</li>
          <li> no React hooks to be used</li>
          <li>
             data does not need to be persisted (ie. on a page refresh, all
            counters can show 0 again)
          </li>
        </ul>
      </div>
    );
  }
}

export default App;