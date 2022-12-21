const Header = ({course}) => 
<h1>{course}</h1>

const Part = ({part}) => 
<p>
  {part.name} {part.exercises}
</p>

const Content = ({parts, id}) => 
<>
  {parts.map(part => 
    <Part key={part.id} part={part} />
  )}
</>

const Total = ({parts}) => {
  const total = parts.reduce((s,p) => {
    s += p.exercises
    return s    
  }, 0)      
  return (
    <p><strong>Total of {total} exercises </strong></p>
  )
}

const Course = ({course}) => {  
  return (
    <>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />      
    </>  
  )
  
}
export default Course