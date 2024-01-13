import { Title } from './ExercisesPage.styled';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises/Categories';
import { useEffect, useState } from 'react';
import CustomLoader from '../../components/Loader/Loader';
import axios from 'axios';

const ExercisesPage = () => {
  const [subPage, setSubPage] = useState('Body parts');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const onChangeSubPage = (nameCategory) => {
    setSubPage(nameCategory);
  };


  //      REWORK CODE
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios.get("http://localhost:3002/exercises/categories").then(fetched => {
  //     setData(fetched.data.data.filter(flt => flt.filter === subPage))
  //   }).finally(() => {
  //     setIsLoading(false);
  //   })
  // }, [subPage]);

  // console.log(data)

  return (
    <Container>
      <Title>Exercises</Title>
      <Categories subPage={subPage} onChangeSubPage={onChangeSubPage} />
      {isLoading && <CustomLoader />}
    </Container>
  );
};

export default ExercisesPage;
