const Course =({course}) => {
	return (
		<div>
			<h1>{course.name}</h1>
			<div>
				{course.parts.map(course => 
					<Content key={course.id} course={course}/>	
				)}
			</div>
		</div>		
	)

}

const Content = ({course}) => {
	return (
		<div>{course.name} {course.exercises}</div>
	)
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App