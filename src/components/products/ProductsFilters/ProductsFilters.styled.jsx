import styled from 'styled-components';

export const FilterContainer = styled.div``;

export const FilterLabel = styled.p`
  // @media screen and (max-width: 1439px) {
  //   display: none;
  // }

  visibility: hidden;
  display: none;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 1440px) {
    visibility: visible;
    display: block;
  }
`;

export const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ResetButton = styled.button`
  position: absolute;
  background-color: transparent;
  padding: 0;
  top: 14px;
  right: 40px;

  svg {
    width: 18px;
    height: 18px;
    stroke: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    top: 16px;
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  position: absolute;
  right: 14px;
  bottom: 14px;
  padding: 0;
  width: 18px;
  height: 18px;

  svg {
    transition: all 100ms linear;
    stroke: var(--color-white);
    width: 18px;
    height: 18px;
  }

  &:hover,
  &:focus {
    svg {
      stroke: var(--color-orange);
    }
  }

  @media screen and (min-width: 768px) {
    bottom: 17px;
  }
`;

// ** ------------------------ ** //
export const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    padding: '8px 0',
    fontSize: '14px',
    color: state.isSelected ? '#E6533C' : '#EFEDE8',
    backgroundColor: state.isSelected ? 'rgba(28, 28, 28, 1)' : state.isFocused ? 'rgba(239, 237, 232, 0.10)' : 'rgba(28, 28, 28, 1)', // Стилізація фона активної опції и ховера
    cursor: 'pointer',
  }),

  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: '#EFEDE8',
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: 'rgba(28, 28, 28, 1)', //фон списку
    // overflowY: 'auto',
    padding: '6px 5px 14px 14px',
  }),
  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: 'transparent', // колір розділювача
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    color: '#EFEDE8',
  }),
  container: (defaultStyles, state) => ({
    ...defaultStyles,
    border: `1px solid ${state.isFocused ? '#E6533C' : 'rgba(239, 237, 232, 0.3)'}`,
    '&:hover': {
      border: '1px solid #E6533C', //колір рамки при ховері
    },
    borderRadius: '12px',
    outline: 'none',
  }),
  menuList: (base) => ({
    ...base,
    overflowY: 'auto', // Вмикаємо скрол
    marginTop: '14px',
    marginRight: '7px',
    '&::-webkit-scrollbar': {
      width: '8px', // Задаємо ширину скрола
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(239, 237, 232, 0.10)', //колір скрола
      borderRadius: '12px', //радіус бордера скрола
    },
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    fontSize: '14px',
    lineHeight: '1.28',
    margin: '0',
    padding: '0',
  }),
};

export const firstSelectStyles = {
  ...customStyles,
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: 'pointer',
    background: 'transparent',
    appearance: 'none', // Removing default appearance
    WebkitAppearance: 'none',
    MozAppearance: 'none',

    '@media screen and (min-width: 375px)': {
      width: '146px',
      height: '46px',
      fontSize: '14px',
      lineHeight: '1.28',
    },

    '@media screen and (min-width: 768px)': {
      width: '192px',
      height: '52px',
      fontSize: '16px',
      lineHeight: '1.5',
    },
  }),
};

export const secondSelectStyles = {
  ...customStyles,
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: 'pointer',
    background: 'transparent',
    appearance: 'none', // Removing default appearance
    WebkitAppearance: 'none',
    MozAppearance: 'none',

    '@media screen and (min-width: 375px)': {
      width: '173px',
      height: '46px',
      fontSize: '14px',
      lineHeight: '1.28',
    },

    '@media screen and (min-width: 768px)': {
      width: '204px',
      height: '52px',
      fontSize: '16px',
      lineHeight: '1.5',
    },
  }),
};
