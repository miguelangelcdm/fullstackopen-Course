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
      {parts.map((parts) => (
        <Part key={parts.id} part={parts.name} exercises={parts.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => {
    console.log('acumulado: ', total,'parte: ', part.name);
    return total + part.exercises;
  },0);
  return <p>Number of exercises: {total}</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
