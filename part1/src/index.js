import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return(
    <div>
      <p>Hello world {props.name} you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Ricardo"
  const age = 20

  return(
    <>
      <h1>Greetings</h1>
      <Hello name='Luisa' age={26 + 10} />
      <Hello name={name} age={age} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))