import { Title } from './ExercisesPage.styled';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises/Categories';
import { useEffect, useState } from 'react';
import CustomLoader from '../../components/Loader/Loader';
import { ListCategory } from '../../components/Exercises/ListCategory';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

const ExercisesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  // const [subPage, setSubPage] = useState('Body parts');

  const { categorie } = useParams();
  console.log(categorie);

  useEffect(() => {
    api
      .fetchCategories(categorie)
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, [categorie]);


  console.log(data);
  return (
    <Container>
      <Title>Exercises</Title>
      <Categories   />
      <ListCategory exercisesCategories={data}  /> 
      {isLoading && <CustomLoader />}

      <section>
        <Title tag="h1" size="h3">
          Exercises
        </Title>
      </section>
    </Container>
  );
};

export default ExercisesPage;


  // const [showListCategorie, setShowLC] = useState(true);



  // const onCategorieClick = (newCategorieName) => {
  //   setShowLC(false);
  //   api
  //     .fetchExercises(newCategorieName)
  //     .then((response) => setData(response))
  //     .finally(() => setIsLoading(false));
  // };

  // useEffect(() => {
  //   setShowLC(true);

  //   api
  //     .fetchCategories(subPage)
  //     .then((response) => setData(response))
  //     .finally(() => setIsLoading(false));
  // }, [subPage]);