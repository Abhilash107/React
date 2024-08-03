import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | React</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//       href: 'https://google.com',
//       target: "blank"
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (
  <a href="https:/google.com" target='_blank'>Google</a>
)

const anotherUser = "I am nobody"

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: '_blank'},
  "Click me to visit google",
  anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  //<MyApp />  //works
  //MyApp()    // works

  //ReactElement // Nope, due to incorrect syntax

  //anotherElement    // works
  reactElement        // works

  //<App/>


)
