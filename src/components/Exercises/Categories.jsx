import { Ul, Li, Button } from './Categories.styled';

export const Categories = ({ subPage, onChangeSubPage }) => {
  const categories = ['Body parts', 'Muscles', 'Equipment'];

  const isActive = (nameCategory) => {
    return nameCategory === subPage;
  };

  return (
    <Ul>
      {categories.map((category, i) => (
        <Li key={i}>
          <Button
            $active={isActive(category)}
            type="button"
            onClick={() => onChangeSubPage(category)}
          >
            {category}
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
