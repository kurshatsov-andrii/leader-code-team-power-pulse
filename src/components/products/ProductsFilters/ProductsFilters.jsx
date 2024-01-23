import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterLabel, InputContainer, ResetButton, SearchButton, SelectWrapper } from './ProductsFilters.styled';
import sprite from '../../../images/sprite.svg';
import { categoriesListThunk } from '../../../redux/products/operations';
import { useEffect, useState } from 'react';
import { selectCategoriesProducts, selectFilter } from '../../../redux/products/selectors';
import { Form } from 'components/Forms';
import { recommendedOptions, setFilter } from '../../../redux/products/slice';
import Select from 'react-select';
import { useDebouncedCallback } from 'use-debounce';
import { categorySelectStyles, productsSelectTheme, recomendedSelectStyles } from './ProductsSelectStyles';

const toUpperCaseFirstLetter = (string) => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

const byField = (fieldName) => {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
};

export const ProductsFilters = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const { category, recomended } = filter;
  const categories = useSelector(selectCategoriesProducts);

  useEffect(() => {
    dispatch(categoriesListThunk());
  }, [dispatch]);

  const sortedCategoriesList = categories
    .map(({ category }) => ({
      value: category,
      label: toUpperCaseFirstLetter(category),
    }))
    .sort(byField('label'));

  const categoriesList = [{ value: 'all', label: 'Categories' }, ...sortedCategoriesList];

  const debouncedSearch = useDebouncedCallback((value) => {
    dispatch(setFilter({ ...filter, search: value }));
  }, 300);

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
    debouncedSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    dispatch(setFilter({ ...filter, search: searchValue }));
  };

  const handleReset = () => {
    setSearch('');
    dispatch(setFilter({ ...filter, search: '' }));
  };

  const handleCategoriesSelect = (e) => {
    dispatch(setFilter({ ...filter, category: e }));
  };

  const handleRecomendedSelect = (e) => {
    dispatch(setFilter({ ...filter, recomended: e }));
  };

  return (
    <>
      <FilterLabel>
        <p>Filters</p>
      </FilterLabel>
      <FilterContainer>
        <div>
          <Form onSubmit={handleSubmit}>
            <InputContainer type="text" placeholder="Search" name="search" value={search} onChange={handleChange}></InputContainer>
            {search !== '' && (
              <ResetButton type="button" onClick={handleReset}>
                <svg>
                  <use href={`${sprite}#icon-x`}></use>
                </svg>
              </ResetButton>
            )}
            <SearchButton type="submit">
              <svg>
                <use href={`${sprite}#icon-search`}></use>
              </svg>
            </SearchButton>
          </Form>
        </div>
        <SelectWrapper>
          <Select
            name="category"
            value={category}
            onChange={handleCategoriesSelect}
            options={categoriesList}
            placeholder="Categories"
            styles={categorySelectStyles}
            theme={productsSelectTheme}
          ></Select>
          <Select
            name="recomended"
            value={recomended}
            defaultValue={recommendedOptions[0]}
            options={recommendedOptions}
            onChange={handleRecomendedSelect}
            styles={recomendedSelectStyles}
            theme={productsSelectTheme}
          ></Select>
        </SelectWrapper>
      </FilterContainer>
    </>
  );
};
