import React, { useState, useEffect } from 'react';

function UseEffect () {
  const [count, setCount] = useState(0);
  // useEffect 可以实现class类组件的componentDidMount和componentDidUpdate生命周期同时写的效果
  useEffect(() => {
    console.log(`UseEffect:you click ${count} times`);
  })
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>点我数字加一次</button>
    </div>
  )
}

// class UseEffect extends Component {
//   state = {
//     counter: 0,
//   }
//   componentDidMount () {
//     console.log(`componentDidMount:you clicked ${this.state.counter} times`);
//   }
//   componentDidUpdate () {
//     console.log(`componentDidUpdate:you clicked ${this.state.counter} times`);
//   }
//   render () {
//     return (
//       <div>
//         <p>you click {this.state.counter} times</p>
//         <button onClick={this.addCounter}>点我数字加一次</button>
//       </div>
//     );
//   }
//   addCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   }
// }

export default UseEffect;