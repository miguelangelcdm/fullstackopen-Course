import "./App.css";
const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};
const Part = ({ part, exercises }) => {
  return (
    <>
      <p>
        {part}: {exercises}
      </p>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
      <br></br>
    </>
  );
};
const Total = ({ parts }) => {
  return (
    <>
      <p>
        Number of exercises:
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 2,
      },
      {
        name: "Using props to pass data",
        exercises: 8,
      },
      {
        name: "State of a component",
        exercises: 34,
      },
    ],
  };
  // console.log(course);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
