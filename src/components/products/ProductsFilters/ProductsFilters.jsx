import { useDispatch, useSelector } from 'react-redux';
import { FiltersContainer } from './ProductsFilters.styled';
import sprite from '../../../images/sprite.svg';
import Select from 'react-select';
import { categoriesListThunk } from '../../../redux/products/operations';
import { useEffect } from 'react';
import { selectCategoriesProducts } from '../../../redux/products/selectors';
import Form from '../../Forms/Form/Form';
import Input from '../../Forms/Input/Input';
import { setFilter } from '../../../redux/products/slice';

const recommendedOptions = [
  { value: 'all', label: 'All' },
  { value: 'recommended', label: 'Recommended' },
  { value: 'not recommended', label: 'Not recommended' },
];

export const ProductsFilters = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(selectCategoriesProducts);

  useEffect(() => {
    categoriesList.length === 0 && dispatch(categoriesListThunk());
  }, [dispatch, categoriesList]);

  const handleChange = ({ target: { value } }) => dispatch(setFilter(value));
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FiltersContainer>
      <p>Filters</p>
      <list>
        <li>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Search" name="search" onChange={handleChange}></Input>
            <button>
              <svg>
                <use href={`${sprite}#icon-x`}></use>
              </svg>
            </button>
            <button>
              <svg>
                <use href={`${sprite}#icon-search`}></use>
              </svg>
            </button>
          </Form>
        </li>
        <li>
          <Select name="Categories" option={categoriesList}></Select>
        </li>
        <li>
          <Select option={recommendedOptions} defaultValue={recommendedOptions[0]}></Select>
        </li>
      </list>
    </FiltersContainer>
  );
};
