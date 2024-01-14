import { Title } from './ExercisesPage.styled';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises/Categories';
import { useEffect, useState } from 'react';
import CustomLoader from '../../components/Loader/Loader';
import { ListCategory } from '../../components/Exercises/ListCategory';
import api from '../../services/api';

const ExercisesPage = () => {
  const [subPage, setSubPage] = useState('Body parts');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const onChangeSubPage = (nameCategory) => {
    console.log('1');
    setSubPage(nameCategory);
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
      <Title>Exercises</Title>
      <Categories subPage={subPage} onChangeSubPage={onChangeSubPage} />
      <ListCategory exercisesCategories={data} />
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
