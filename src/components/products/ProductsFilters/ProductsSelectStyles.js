export const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 14px',
  }),

  option: (defaultStyles, state) => ({
    ...defaultStyles,
    padding: '8px 0',
    fontSize: '14px',
    color: state.isSelected ? '#E6533C' : '#EFEDE8',
    backgroundColor: state.isSelected ? 'rgba(28, 28, 28, 1)' : state.isFocused ? 'rgba(239, 237, 232, 0.10)' : 'rgba(28, 28, 28, 1)',
    cursor: 'pointer',
  }),

  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: '#EFEDE8',
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: 'rgba(28, 28, 28, 1)',
    padding: '0 0 0 14px',
  }),

  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: 'transparent',
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    height: '18px',
    padding: '0 14px 0 0',
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    color: '#EFEDE8',
  }),
  container: (defaultStyles, state) => ({
    ...defaultStyles,
    border: `1px solid ${state.isFocused ? '#E6533C' : 'rgba(239, 237, 232, 0.3)'}`,
    '&:hover': {
      border: '1px solid #E6533C',
    },
    borderRadius: '12px',
    outline: 'none',
  }),
  menuList: (base) => ({
    ...base,
    overflowY: 'auto',
    marginTop: '14px',
    marginRight: '7px',

    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(239, 237, 232, 0.10)',
      borderRadius: '12px',
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

export const categorySelectStyles = {
  ...customStyles,
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: 'pointer',
    background: 'transparent',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',

    '@media screen and (min-width: 375px)': {
      width: '144px',
      height: '46px',
      fontSize: '14px',
      lineHeight: '1.28',
    },

    '@media screen and (min-width: 768px)': {
      width: '190px',
      height: '52px',
      fontSize: '16px',
      lineHeight: '1.5',
    },
  }),
};

export const recomendedSelectStyles = {
  ...customStyles,
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: 'pointer',
    background: 'transparent',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',

    '@media screen and (min-width: 375px)': {
      width: '171px',
      height: '46px',
      fontSize: '14px',
      lineHeight: '1.28',
    },

    '@media screen and (min-width: 768px)': {
      width: '202px',
      height: '52px',
      fontSize: '16px',
      lineHeight: '1.5',
    },
  }),
};

export const productsSelectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary50: 'rgba(255, 255, 255, 0.10)', // Колір фону при кліку на селект в меню
    primary: 'transparent',
    neutral40: '#EFEDE8', // ховер на галочку
    neutral20: 'transparent', // дефолтний бордер
    neutral30: 'transparent', // дефолтний ховер бордер
    neutral50: 'rgba(239, 237, 232, 1)', // колір плейсхолдера
    neutral80: 'rgba(239, 237, 232, 1)',
  },
});
