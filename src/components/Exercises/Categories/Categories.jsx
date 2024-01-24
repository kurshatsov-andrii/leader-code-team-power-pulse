import { useDispatch } from 'react-redux';
import { changePageNumber } from '../../../redux/exercises/operations';
import { Li, LinkTo, Ul } from './Categories.styled';

const Categories = () => {
  const categories = ['Body parts', 'Muscles', 'Equipment'];
  const dispatch = useDispatch();

  return (
    <Ul>
      {categories.map((category, i) => (
        <Li key={i}>
          <LinkTo to={`/exercises/${category}`} onClick={() => dispatch(changePageNumber(1))}>
            {category}
          </LinkTo>
        </Li>
      ))}
    </Ul>
  );
};

export default Categories;
