import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { productListThunk } from '../../../redux/products/operations';
import { selectFilter, selectIsLoadingProduct } from '../../../redux/products/selectors';
import { ProductCard, ProductsListContainer } from './ProductsList.styled';
import ProductsNotFound from '../ProductsNotFound/ProductsNotFound';
import { selectUserBlood } from '../../../redux/userProfile/selectors';
import CustomLoader from '../../Loader/Loader';

export const ProductsList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoadingProduct);
  const bloodGroup = useSelector(selectUserBlood);
  const filter = useSelector(selectFilter);
  const [localFilter, setLocalFilter] = useState(filter);
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (filter !== localFilter) {
      setProducts([]);
      setPage(1);
      setLocalFilter(filter);
      setFetching(true);
    }
    if (fetching) {
      dispatch(
        productListThunk({
          search: localFilter.search,
          category: localFilter.category.value,
          recomended: localFilter.recomended.value,
          page,
        })
      )
        .then((res) => {
          setProducts([...products, ...res.payload.products]);
          setPage((prevState) => prevState + 1);
          setTotalCount(res.payload.sum);
        })
        .finally(() => setFetching(false));
    }
  }, [dispatch, localFilter, filter, fetching, firstMount, page, products]);

  const scrollHandler = (e) => {
    if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100 && products.length < totalCount) {
      setFetching(true);
    }
  };
  const mobileScrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && products.length < totalCount) {
      setFetching(true);
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', mobileScrollHandler);
    return () => {
      document.removeEventListener('scroll', mobileScrollHandler);
    };
  });

  return (
    <>
      {isLoading && <CustomLoader />}
      {products.length === 0 ? (
        <ProductsNotFound />
      ) : (
        <ProductsListContainer onScroll={scrollHandler}>
          {products.map(({ _id, weight, calories, category, title, groupBloodNotAllowed }) => {
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
    </>
  );
};
