import { Fields, FieldsLabel } from './Fieldset.styled';

const Fieldset = ({ label, col = 'auto', colTablet = '1', colMobil = '1', gap = '14', children }) => {
  const classes = {
    col_auto: col === 'auto',
    col_1: col === '1',
    col_2: col === '2',
    col_3: col === '3',
    col_4: col === '4',
    col_5: col === '5',

    col_autotab: col === 'auto',
    col_1tab: colTablet === '1',
    col_2tab: colTablet === '2',
    col_3tab: colTablet === '3',
    col_4tab: colTablet === '4',
    col_5tab: colTablet === '5',

    col_automob: col === 'auto',
    col_1mob: colMobil === '1',
    col_2mob: colMobil === '2',
    col_3mob: colMobil === '3',
    col_4mob: colMobil === '4',
    col_5mob: colMobil === '5',
  };

  const currentClasses = Object.keys(classes)
    .filter((key) => classes[key])
    .join(' ');

  return (
    <Fields data-col={col} data-coltablet={colTablet} data-colmobil={colMobil} data-gap={gap} className={currentClasses}>
      {label && <FieldsLabel>{label}</FieldsLabel>}
      {children}
    </Fields>
  );
};

export default Fieldset;
