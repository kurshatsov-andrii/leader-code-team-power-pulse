import { TitleContent } from '../../components/Typography/Title/Title.styled';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises/Categories';
import { useEffect, useState } from 'react';
import CustomLoader from '../../components/Loader/Loader';
import { ListCategory } from '../../components/Exercises/ListCategory';
import { useParams } from 'react-router-dom';
import ExercisesList from '../../components/Exercises/ExercisesList';
import ExerciseLayout from '../../components/Exercises/ExerciseLayout';

const ExercisesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [subData, setSubData] = useState(null);


  // useEffect(() => {
  //   if (subcategorie) {
  //     api
  //       .fetchExercises(subcategorie)
  //       .then((response) => setData(response))
  //       .finally(() => setIsLoading(false));
  //   } else {
  //     api
  //       .fetchCategories(categorie)
  //       .then((response) => setData(response))
  //       .finally(() => setIsLoading(false));
  //   }
  // }, [subcategorie, categorie] );

  useEffect(() => {
    console.log("sub")
    api
      .fetchExercises(subcategorie)
      .then((response) => setSubData(response))
      .finally(() => setIsLoading(false));
  }, [subcategorie]);



  console.log(data);
  return <>
   
    {isLoading && <CustomLoader />}</>;
};

export default ExercisesPage;