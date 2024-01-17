import { Ul, Li, Button } from './Categories.styled';
import { queryCoder } from '../../utils/queryEditior';

export const Categories = ({ subPage,  }) => {
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
            to={`/exercises/${queryCoder(category)}`}
          >
            {category}
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
