import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ReducerDemo from './reducerDemo/Demo';
// import UseReducer from "./UseReducer";
// import UseContext from "./UseContext";
// import Redux from "./redux/index";
// import UseRef from "./UseRef";
import UseMemo from "./UseMemo";

ReactDOM.render(
  <React.StrictMode>
    <UseMemo />
    {/* <UseRef /> */}
    {/* <Redux /> */}
    {/* <UseContext /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


// import React from "react";
// import Redux from "./redux/index";

// function Index () {
//   return (
//     <Redux />
//   )
// }

// export default Index;