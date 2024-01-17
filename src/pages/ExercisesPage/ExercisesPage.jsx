import { TitleContent } from '../../components/Typography/Title/Title.styled';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises/Categories';
import { useEffect, useState } from 'react';
import CustomLoader from '../../components/Loader/Loader';
import { ListCategory } from '../../components/Exercises/ListCategory';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import ExercisesList from '../../components/Exercises/ExercisesList';

const ExercisesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [subData, setSubData] = useState(null);
  const { categorie, subcategorie } = useParams();

  console.log(subcategorie);
  console.log(subData);

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

  useEffect(() => {
    console.log('cat');

    api
      .fetchCategories(categorie)
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, [categorie]);

  console.log(data);
  return (
    <Container>
      <section>
        <TitleContent tag="h1" size="h3">
          Exercises
        </TitleContent>
      </section>

      <Categories />
      {subcategorie ? <ExercisesList data={subData} /> : <ListCategory exercisesCategories={data} />}
      {isLoading && <CustomLoader />}
    </Container>
  );
};

export default ExercisesPage;