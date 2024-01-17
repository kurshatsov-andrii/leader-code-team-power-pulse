import { Title } from '../../components/Typography/Title/Title.styled';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises/Categories';
import { useEffect, useState } from 'react';
import CustomLoader from '../../components/Loader/Loader';
import { ListCategory } from '../../components/Exercises/ListCategory';
import { ExercisesList } from '../../components/Exercises/ExercisesList';
import api from '../../services/api';

const ExercisesPage = () => {
  const [subPage, setSubPage] = useState('Body parts');
  const [showListCategorie, setShowLC] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const onChangeSubPage = (nameCategory) => {
    console.log('1');
    setSubPage(nameCategory);
  };

  const onCategorieClick = (newCategorieName) => {
    setShowLC(false)
    api
      .fetchExercises(newCategorieName)
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    api
      .fetchCategories(subPage)
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, [subPage]);

  console.log(data);
  return (
    <Container>
      <Title tag="h1" size="h3">
        Exercises
      </Title>
      <Categories subPage={subPage} onChangeSubPage={onChangeSubPage} />
      {showListCategorie ? <ListCategory exercisesCategories={data} onCategorieClick={onCategorieClick} /> : <ExercisesList />}
      {isLoading && <CustomLoader />}
    </Container>
  );
};

export default ExercisesPage;
