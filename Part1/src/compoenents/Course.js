import React from 'react'

const Course =({course}) => {
	return (
		<div>
			<h1>{course.name}</h1>
			<div>
				{course.parts.map(course => 
					<Content key={course.id} course={course}/>	
				)}
			</div>
      <div><Sum key={course.parts.id} course={course}/></div>

		</div>		
	)

}

const Content = ({course}) => {
	return (
		<div>{course.name} {course.exercises}</div>
	)
}

const Sum = ({course}) => {
  const sum = course.parts.reduce((s, p) => {
    console.log('total :', s.exercises)
    console.log('valule to add: ', p.exercises)
    return s + p.exercises
  }, 0)

  return (
    <div>total of {sum} exercises</div>
  )
}

export default Course