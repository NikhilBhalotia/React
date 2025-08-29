import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'


// this cannot be passed directly to the render

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "click me to visit google",
// };

const anotherElement = <a href="https://google.com" target='_blank'>Click me using another element</a>;  // can be passed

const username = "My Name"

const reactElement = React.createElement("a", {
  href: "https://google.com",
  target: '_blank'
},
  "Click me using react element",
  username
);


ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElement
  // anotherElement
  reactElement

  // <App/>
  

  


)
