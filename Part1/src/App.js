import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
	
  return (
		<div>
			<div>
				<h1>Give Feedback</h1>
			</div>
			<div>
				<button onClick={() => setGood(good + 1)}>Good</button>
				<button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
				<button onClick={() => setBad(bad + 1)}>Bad</button>
			</div>
			<h1>Stats</h1>
			<Statistics good={good} neutral={neutral} bad={bad}/>
		</div>
		
  )
}

const StatisticLine = (props) => {
	return (
		
		<table>
			<tbody>
				<tr>
					<td>{props.text}</td>
					<td>{props.value}</td>
				</tr>
			</tbody>
		</table>
		
	)
	
}

const Statistics = (props) => {
	const good = props.good
	const neutral = props.neutral
	const bad = props.bad
	
	return (
		<div>
			<StatisticLine text='good' value={good}/> 
			<StatisticLine text='neutral' value={neutral}/> 
			<StatisticLine text='bad' value={bad}/> 
			<div>all: {good + neutral + bad}</div>
			<CalAve good={good} neutral={neutral} bad={bad} />
			<PosPer good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

const CalAve = (props) => {
	console.log('called CalAve!')
	const good = props.good
	const neutral = props.neutral
	const bad = props.bad
	
	const ave = (good - bad) / (good+neutral+bad)
	
	if (good===0 && neutral===0 && bad===0) {
		return <div>No feedBack given</div>
	}
	return <div>average: {ave}</div>
}

const PosPer = (props) => {
	const good = props.good
	const neutral = props.neutral
	const bad = props.bad
	
	const percentage = good / (good+neutral+bad) * 100
	
	if (good===0 && neutral===0 && bad===0) {
		return <div></div>
	}
	
	return <div>positive percentage: {percentage}</div>
}


export default App