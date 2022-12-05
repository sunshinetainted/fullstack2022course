import { useState } from "react";
const DisplayHeading = ({heading}) => <h2>{heading}</h2>

const DisplayText = ({text}) => <p>{text}</p>


const App = () => {
  const anecdotes= [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const selectAnecdote = () => {
    console.log(points)
    setSelected(getRandomNumber())
  }
  
  const getRandomNumber = () => {
    const min = Math.ceil(0)
    const max = Math.floor(anecdotes.length - 1)
    let randomNumber = Math.floor(Math.random() * (max - min) + min)
    if (randomNumber === selected) {
      if (randomNumber < max || randomNumber === min) {
        randomNumber++       
      } else if (randomNumber === max) {
        randomNumber--
      }             
    } 
    return randomNumber;
  }
  
  
  const setAnecdotePoints = (n) => {        
    const newPoints = [...points]    
    newPoints[n] += 1    
    setPoints(newPoints)
    
  }
  
  

  
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  
  const [selected, setSelected] = useState(0)
  
  const Button= (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
  // Get most voted anecdote's index by using reduce function
  const mostVotedAnecdote = points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  
  const voteText = "This anecdote has " + points[selected] +  " votes."
  return (
    <div>
      <DisplayHeading heading="Anecdote of the day" />
      <DisplayText text={anecdotes[selected]} />
      <DisplayText text={voteText} />
      <div>
        <Button handleClick={() => setAnecdotePoints(selected)} text="Vote" /> 
        <Button handleClick={() => selectAnecdote()} text="Next ancedote" />                
      </div>
      <DisplayHeading heading="Anecdote with most votes" />
      <DisplayText text={anecdotes[mostVotedAnecdote]} />
{/*       second method to display most voted anecdote => copy of points, find index of element with highest points

      <DisplayText text={anecdotes[points.indexOf(Math.max(...points))]} /> 
      */}
    </div>
  )
}
export default App;
