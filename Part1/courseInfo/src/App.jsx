
const Header = ({course}) => {
  return (<h1>{course}</h1> );
}

const Content = ({parts}) => {
  return (
    parts.map((part, index) => 
    <p key={index}>
      {part.name} {part.exercises}
    </p>)
  );
}

const Total = ({parts}) => {
  const total = parts.reduce(function (acc, obj) { return acc + obj.exercises; }, 0);
  return ( <p>Number of exercises {total}</p>);
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [{name:'Fundamentals of React', exercises: 10}, 
  {name:'Using props to pass data', exercises: 7}, 
  {name:'State of a component', exercises: 24}]

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App