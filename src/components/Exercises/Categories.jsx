import { Ul, Li, LinkTo } from './Categories.styled';

export const Categories = () => {
  const categories = ['Body parts', 'Muscles', 'Equipment'];

  return (
    <Ul>
      {categories.map((category, i) => (
        <Li key={i}>
          <LinkTo to={`/exercises/${category}`}>{category}</LinkTo>
        </Li>
      ))}
    </Ul>
  );
};
