import {useState} from 'react'

const DisplayHeading = props => <h1>{props.text}</h1>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr> 
  )
}
const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
      </button> 
  )
}

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        <DisplayHeading text="statistics" />
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <DisplayHeading text="statistics" />
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.allClicks} />      
          <StatisticLine text="average" value={props.calcAverage}/>
          <StatisticLine text="positive" value={props.percentPositive} />
        </tbody>
      </table>                  
    </div>  
  )
  
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)
  
  const calcAverage = ((good * 1) + (neutral * 0) + (bad * -1)) / allClicks
  const percentPositive = ((good / allClicks) * 100) + "%"
  const setGoodValue = () => {        
    setAllClicks(allClicks + 1)
    setGood(good + 1)
  }
  
  const setBadValue = () => {
    setAllClicks(allClicks + 1)    
    setBad(bad + 1)
  }

  const setNeutralValue = () => {
    setAllClicks(allClicks + 1)    
    setNeutral(neutral + 1)
  }
  
  return (
    
    <div>
      <DisplayHeading text="give feedback" />
      <Button onClick={setGoodValue} text="Good" />
      <Button onClick={setNeutralValue} text="Neutral" />
      <Button onClick={setBadValue} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} allClicks={allClicks} calcAverage={calcAverage} percentPositive={percentPositive} />
    </div>
  )
}
export default App;
