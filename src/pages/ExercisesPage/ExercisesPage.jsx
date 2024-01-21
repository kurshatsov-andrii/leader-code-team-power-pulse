import { Outlet } from 'react-router-dom';
import { Container } from '../../styles/container';
import { Categories } from '../../components/Exercises';
import { TitleContent } from '../../components/Typography/Title/Title.styled';
// import ModalComplete from '../../components/Exercises/modals/ModalComplete';
import BasicModalWindow from '../../components/BasicModalWindow/BasicModalWindow';
import ModalTask from '../../components/Exercises/modals/ModalTask';

function ExercisesPage() {
  const onClick = () => {
    console.log('clicked.');
  };

  return (
    <Container>
      <section>
        <TitleContent $tag="h1" size="h3">
          Exercises
        </TitleContent>
      </section>

      {/* Modal Well done*/}
      {/* <BasicModalWindow onClick={onClick}>
        <ModalComplete onClick={onClick} />
      </BasicModalWindow> */}

      <Categories />
      <Outlet />
    </Container>
  );
}

export default ExercisesPage;
