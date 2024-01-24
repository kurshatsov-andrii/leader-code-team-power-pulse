export const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 0 0 14px',
  }),

  option: (defaultStyles, state) => ({
    ...defaultStyles,
    padding: '4px 0',
    fontSize: '14px',
    lineHeight: '1.28',
    color: state.isSelected ? '#E6533C' : '#EFEDE8',
    backgroundColor: state.isSelected ? 'rgba(28, 28, 28, 1)' : state.isFocused ? 'rgba(239, 237, 232, 0.10)' : 'rgba(28, 28, 28, 1)',
    cursor: 'pointer',
    '@media screen and (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.5',
    },
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

  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    color: '#EFEDE8',
    padding: '0 14px 0 0',
    svg: {
      width: '18px',
      height: '18px',
    },
    '@media screen and (min-width: 768px)': {
      padding: '0 17px 0 0',
    },
  }),

  container: (defaultStyles, state) => ({
    ...defaultStyles,
    border: `1px solid ${state.isFocused ? '#E6533C' : 'rgba(239, 237, 232, 0.3)'}`,
    transition: 'all 100ms linear',
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

    '@media screen and (max-width: 374px)': {
      minWidth: '128px',
    },

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
    primary50: 'rgba(255, 255, 255, 0.10)',
    primary: 'transparent',
    neutral40: '#EFEDE8',
    neutral20: 'transparent',
    neutral30: 'transparent',
    neutral50: 'rgba(239, 237, 232, 1)',
    neutral80: 'rgba(239, 237, 232, 1)',
  },
});
