import { Outlet } from "react-router-dom";
import { Categories } from "./Categories";
import { TitleContent } from "../Typography/Title/Title.styled";
import { Container } from "../../styles/container";

function ExerciseLayout() {
  return (
    <Container>
      <section>
        <TitleContent tag="h1" size="h3">
          Exercises
        </TitleContent>
      </section>

      <Categories />
      <Outlet />
    </Container>
  );
}

export default ExerciseLayout;
