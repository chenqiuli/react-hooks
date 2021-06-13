import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Index () {
  useEffect(() => {
    console.log(`老弟，你来了，index页面`);
    return () => {
      // 写在return里面就是相当于class组件的componentWillUnMount生命周期
      console.log(`老弟，你走了，index页面`);
    }
    // 最后加个空数组是表示离开这个页面的时候才会触发
    // 里面也可以加state的变量，表示只有那个变量改变的时候才会触发，简单来说就是什么时候触发的条件
  }, [])
  return <p>index页</p>
}
function List () {
  useEffect(() => {
    console.log(`老弟，你来了，list页面`);
    return () => {
      console.log(`老弟，你走了，list页面`);
    }
  }, [])
  return <p>List页</p>
}

// useState 不能用在if语句中
function UseState () {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>you click {counter} times</p>
      <button onClick={() => { setCounter(counter + 1) }}>点我数字加一次</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        {/* exact精确匹配 */}
        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  )
}

// class App extends Component {
//   state = {
//     counter: 0,
//   }
//   render () {
//     console.log(this.state.counter);
//     return (
//       <div>
//         <p>you click {this.state.counter} times</p>
//         <button onClick={this.addCounter}>点我数字加一次</button>
//       </div>
//     );
//   }
//   addCounter = () => {
//     // console.log(this);
//     this.setState({ counter: this.state.counter + 1 });
//   }
// }
export default UseState;