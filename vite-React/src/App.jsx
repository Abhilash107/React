import Test from "./test.jsx"

function App() {

  const username = "Abhilash107"

  return (
    <>
    <Test/>
    <h1>Hello, {username}</h1>
    </>
    // error, export only 1 element
    //* Hence use div or <> </>(fragment)
    //* we write evaluated expressions inside return
   
  )
}

export default App
