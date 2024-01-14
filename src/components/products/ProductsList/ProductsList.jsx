import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { selectUser } from '../../../redux/auth/selectors';
import ProductsNotFound from '../ProductsNotFound/ProductsNotFound';
import { productListThunk } from '../../../redux/products/operations';
import { selectFilteredProducts } from '../../../redux/products/selectors';

export const ProductsList = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const user = useSelector(selectUser);
  const bloodGroup = user.blood;

  useEffect(() => {
    dispatch(productListThunk());
  }, [dispatch]);

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <ProductsNotFound />
      ) : (
        <ul>
          {filteredProducts.map(({ id, weight, calories, category, title, groupBloodNotAllowed }) => {
            return (
              <ProductsItem
                key={id}
                id={id}
                weight={weight}
                calories={calories}
                category={category}
                title={title}
                isRecommended={!groupBloodNotAllowed[bloodGroup]}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
