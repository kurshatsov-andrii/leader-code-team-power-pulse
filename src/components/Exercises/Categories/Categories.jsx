import { useDispatch } from 'react-redux';
import { Ul, Li, LinkTo } from './Categories.styled';
import { changePageNumber } from '../../../redux/exercises/operations';

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

export default Categories