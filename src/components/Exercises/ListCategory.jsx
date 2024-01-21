import { Ul, Img, Title, SubTitle } from './ListCategory.styled';
import { Link, useParams } from 'react-router-dom';
import { useEffect,  } from 'react';
import { fetchSpecialCategories } from '../../redux/exercises/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectLoading, selectPage } from '../../redux/exercises/selectors';

export const ListCategory = () => {
  const isLoading = useSelector(selectLoading);
  const currentPage = useSelector(selectPage);
  const exercisesCategories = useSelector(selectData);
  const dispatch = useDispatch();
  const { category, subcategory } = useParams();

  useEffect(() => {
    dispatch(fetchSpecialCategories({ filter: category, page: currentPage }));
  }, [category, subcategory, dispatch, currentPage]);

  if (isLoading) {
    return 'loading';
  }

  return (
    <Ul>
      {exercisesCategories &&
        exercisesCategories.map(({ name, filter, imgURL, _id }) => {
          return (
            <li key={_id}>
              <Link to={`/exercises/${category}/${name}`}>
                <Img $imageURL={imgURL} alt={name}>
                  <Title>{name}</Title>
                  <SubTitle>{filter}</SubTitle>
                </Img>
              </Link>
            </li>
          );
        })}
    </Ul>
  );
};
