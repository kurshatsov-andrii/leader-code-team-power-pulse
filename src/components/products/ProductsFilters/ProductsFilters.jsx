import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterLabel, FilterList, ResetButton, SearchButton, firstSelectStyles, secondSelectStyles } from './ProductsFilters.styled';
import sprite from '../../../images/sprite.svg';
import { categoriesListThunk } from '../../../redux/products/operations';
import { useEffect, useState } from 'react';
import { selectCategoriesProducts, selectCategoryFilter, selectRecomendedFilter } from '../../../redux/products/selectors';
import Form from '../../Forms/Form/Form';
import Input from '../../Forms/Input/Input';
import { recommendedOptions, setFilterCategory, setFilterRecomended, setFilterSearch } from '../../../redux/products/slice';
import Select from 'react-select';
// import InputSelect from '../../Forms/InputTypes/InputSelecte/InputSelecte';

const toUpperCaseFirstLetter = (string) => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

export const ProductsFilters = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const categories = useSelector(selectCategoriesProducts);
  const category = useSelector(selectCategoryFilter);
  const recomended = useSelector(selectRecomendedFilter);

  const categoriesList = categories?.map(({ category }) => ({
    value: category,
    label: toUpperCaseFirstLetter(category),
  }));

  useEffect(() => {
    dispatch(categoriesListThunk());
  }, [dispatch]);

  // debounce
  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    dispatch(setFilterSearch(searchValue));
  };

  const handleReset = () => {
    setSearch('');
  };

  const handleCategoriesSelect = (e) => {
    dispatch(setFilterCategory(e));
  };

  const handleRecomendedSelect = (e) => {
    dispatch(setFilterRecomended(e));
  };

  return (
    <FilterContainer>
      <FilterLabel>Filters</FilterLabel>
      <FilterList>
        <li>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Search" name="search" value={search} onChange={handleChange}></Input>
            <ResetButton type="button" onClick={handleReset}>
              <svg>
                <use href={`${sprite}#icon-x`}></use>
              </svg>
            </ResetButton>
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
            styles={firstSelectStyles}
          ></Select>
        </li>
        <li>
          <Select
            name="recomended"
            value={recomended}
            defaultValue={recommendedOptions[0]}
            options={recommendedOptions}
            onChange={handleRecomendedSelect}
            styles={secondSelectStyles}
          ></Select>
          {/* <InputSelect name="category" onChange={handleCategoriesSelect} options={categoriesList} placeholder="Categories"></InputSelect>
          <InputSelect name="recomended" options={recommendedOptions} onChange={handleRecomendedSelect}></InputSelect> */}
          {/* {(type, name, label, placeholder, required, options, onChange)} */}
        </li>
      </FilterList>
    </FilterContainer>
  );
};
