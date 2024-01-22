import { useDispatch, useSelector } from 'react-redux';
import { changePageNumber } from '../../../redux/exercises/operations';
import { InnerCircle, OutCircle, PaginationDotsWrapper } from './Pagination.styled';
import { selectPage } from '../../../redux/exercises/selectors';

function Pagination({ currentPage, pagesCount }) {
  const dispatch = useDispatch();
  const currPage = useSelector(selectPage);
  const pages = [];

  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }

  return (
    <PaginationDotsWrapper>
      {pages.map((number) => {
        return (
          <OutCircle key={number} className={number === currPage ? 'active' : 'nothing'}>
            <InnerCircle onClick={() => dispatch(changePageNumber(number))}>
              <p></p>
            </InnerCircle>
          </OutCircle>
        );
      })}
    </PaginationDotsWrapper>
  );
}

export default Pagination;
