import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { selectUsers } from '../../../redux/auth/selectors';
import { productListThunk } from '../../../redux/products/operations';
import { selectFilter, selectProductsList } from '../../../redux/products/selectors';
import { ProductsListContainer, ProductsListItem } from './ProductsList.styled';
import ProductsNotFound from '../ProductsNotFound/ProductsNotFound';

export const ProductsList = () => {
  const dispatch = useDispatch();

  const list = useSelector(selectProductsList);
  const bloodGroup = useSelector(selectUsers).blood;
  const filter = useSelector(selectFilter);
  const { search, category, recomended } = filter;

  useEffect(() => {
    dispatch(
      productListThunk({
        recomended: recomended.value,
        category: category.value,
        search,
      })
    );
  }, [dispatch, recomended, category, search]);

  return (
    <div>
      {list.length === 0 ? (
        <ProductsNotFound />
      ) : (
        <ProductsListContainer>
          {list.map(({ _id, weight, calories, category, title, groupBloodNotAllowed }) => {
            return (
              <ProductsListItem key={_id}>
                <ProductsItem
                  id={_id}
                  weight={weight}
                  calories={calories}
                  category={category}
                  title={title}
                  isRecomended={!groupBloodNotAllowed[bloodGroup]}
                />
              </ProductsListItem>
            );
          })}
        </ProductsListContainer>
      )}
    </div>
  );
};
