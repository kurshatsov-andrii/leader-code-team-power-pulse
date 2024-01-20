import { useDispatch, useSelector } from 'react-redux';
import {
  FilterContainer,
  FilterLabel,
  FilterList,
  InputContainer,
  ResetButton,
  SearchButton,
  categorySelectStyles,
  recomendedSelectStyles,
} from './ProductsFilters.styled';
import sprite from '../../../images/sprite.svg';
import { categoriesListThunk } from '../../../redux/products/operations';
import { useEffect } from 'react';
import { selectCategoriesProducts, selectFilter } from '../../../redux/products/selectors';
import Form from '../../Forms/Form/Form';
import { recommendedOptions, setFilter } from '../../../redux/products/slice';
import Select from 'react-select';
// import Input from '../../Forms/Input/Input';
// import InputSelect from '../../Forms/InputTypes/InputSelecte/InputSelecte';

const toUpperCaseFirstLetter = (string) => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

export const ProductsFilters = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const { search, category, recomended } = filter;

  const categories = useSelector(selectCategoriesProducts);

  const categoriesList = [
    { value: 'all', label: 'Categories' },
    ...categories.map(({ category }) => ({
      value: category,
      label: toUpperCaseFirstLetter(category),
    })),
  ];

  useEffect(() => {
    dispatch(categoriesListThunk());
  }, [dispatch]);

  // debounce
  const handleChange = ({ target: { value } }) => {
    dispatch(setFilter({ ...filter, search: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    dispatch(setFilter({ ...filter, search: searchValue }));
  };

  const handleReset = () => {
    dispatch(setFilter({ ...filter, search: '' }));
  };

  const handleCategoriesSelect = (e) => {
    dispatch(setFilter({ ...filter, category: e }));
  };

  const handleRecomendedSelect = (e) => {
    dispatch(setFilter({ ...filter, recomended: e }));
  };

  return (
    <FilterContainer>
      <FilterLabel>Filters</FilterLabel>
      <FilterList>
        <li>
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
        </li>
        <li>
          <Select
            name="category"
            value={category}
            onChange={handleCategoriesSelect}
            options={categoriesList}
            placeholder="Categories"
            styles={categorySelectStyles}
          ></Select>
        </li>
        <li>
          <Select
            name="recomended"
            value={recomended}
            defaultValue={recommendedOptions[0]}
            options={recommendedOptions}
            onChange={handleRecomendedSelect}
            styles={recomendedSelectStyles}
          ></Select>
        </li>
      </FilterList>
    </FilterContainer>
  );
};
