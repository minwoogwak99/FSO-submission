import React from 'react'

const Courses = ({courses}) => {
	

	
	return (
		<div>
			<h1>Web development curriculum</h1>
			<ShowCourse course={courses[0]}/>
			<ShowTotal parts={courses[0].parts}/>
			<ShowCourse course={courses[1]}/>
			<ShowTotal parts={courses[1].parts}/>
		</div>
	) 
}

const ShowCourse = ({course}) => {
	return (
		<div>
			<h2>{course.name}</h2>
			{course.parts.map(part => {
				return (
					<div key={part.id}>{part.name} {part.exercises}</div>
				)
			})}
		</div>
	) 
}

const ShowTotal = ({parts}) => {
	const sum = parts.reduce((s, p) => s + p.exercises, 0)
	
	return (
			<strong>Total of {sum} exercises</strong>
	)
}

export default Courses