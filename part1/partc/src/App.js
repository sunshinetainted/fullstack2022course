import {useState} from 'react'
const Display = props => <div>{props.value}</div>

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>  
  )
}

const App = () => {

  const [value, setValue] = useState(10)
    
  const setToValue = (newValue) => {
    setValue(newValue)
  } 
  
  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(0)} text="Reset to zero" />
      <Button handleClick={() => setToValue(1000)} text="Set to 1000" />      
      <Button handleClick={() => setToValue(value + 1)} text="Increase value by 1" />      

    </div>
  )
    
}
export default App;
