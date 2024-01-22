import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { productListThunk } from '../../../redux/products/operations';
import { selectFilter, selectProductsList } from '../../../redux/products/selectors';
import { ProductCard, ProductsListContainer } from './ProductsList.styled';
import ProductsNotFound from '../ProductsNotFound/ProductsNotFound';
import { selectUserBlood } from '../../../redux/userProfile/selectors';

export const ProductsList = () => {
  const dispatch = useDispatch();

  const list = useSelector(selectProductsList);
  const bloodGroup = useSelector(selectUserBlood);
  const filter = useSelector(selectFilter);
  const { search, category, recomended } = filter;

  useEffect(() => {
    dispatch(
      productListThunk({
        search,
        category: category.value,
        recomended: recomended.value,
      })
    );
  }, [dispatch, search, category, recomended]);

  return (
    <div>
      {list.length === 0 ? (
        <ProductsNotFound />
      ) : (
        <ProductsListContainer>
          {list.map(({ _id, weight, calories, category, title, groupBloodNotAllowed }) => {
            return (
              <ProductCard key={_id}>
                <ProductsItem
                  id={_id}
                  weight={weight}
                  calories={calories}
                  category={category}
                  title={title}
                  isRecomended={!groupBloodNotAllowed[bloodGroup] ? true : false}
                />
              </ProductCard>
            );
          })}
        </ProductsListContainer>
      )}
    </div>
  );
};
