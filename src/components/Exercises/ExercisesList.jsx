export const ExercisesList = ({ data }) => {
  return (
    <ul>
      {data && data.map((exercise) => {
        return <li key={exercise._id}>{exercise.bodyPart}</li>
      })}
    </ul>
  );

}

export default ExercisesList;