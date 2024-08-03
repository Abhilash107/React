import Test from "./test.jsx"

function App() {
  return (
    <><Test/>
   <h1>Hello</h1></>
    // error, export only 1 element
   //* Hence use div or <> </>(fragment)
  )
}

export default App
