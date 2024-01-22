import { Ul, Img, Title, SubTitle, SectionCategories } from './ListCategory.styled';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchSpecialCategories } from '../../../redux/exercises/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectLoading, selectMaxPages, selectPage } from '../../../redux/exercises/selectors';
import Pagination from '../Pagination/Pagination';

const ListCategory = () => {
  const isLoading = useSelector(selectLoading);
  const exercisesCategories = useSelector(selectData);
  const currentPage = useSelector(selectPage);
  const maxPages = useSelector(selectMaxPages);
  const dispatch = useDispatch();
  const location = useLocation();
  const { category, subcategory } = useParams();

  useEffect(() => {
    dispatch(fetchSpecialCategories({ filter: category, page: currentPage }));
  }, [category, subcategory, dispatch, currentPage]);

  if (isLoading) {
    return 'loading';
  }

  return (
    <SectionCategories>
      <Ul>
        {exercisesCategories &&
          exercisesCategories.map(({ name, filter, imgURL, _id }) => {
            return (
              <li key={_id}>
                <Link to={`/exercises/${category}/${name}`} state={{ from: location }}>
                  <Img $imageURL={imgURL} alt={name}>
                    <Title>{name}</Title>
                    <SubTitle>{filter}</SubTitle>
                  </Img>
                </Link>
              </li>
            );
          })}
      </Ul>
      {maxPages > 1 && <Pagination currentPage={currentPage} pagesCount={maxPages} />}
    </SectionCategories>
  );
};

export default ListCategory