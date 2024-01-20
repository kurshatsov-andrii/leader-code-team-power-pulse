import Section from 'components/Section/Section';
import { Title, TitleWrapper } from 'components/Typography';

//Подключение
import { Fieldset, Input } from 'components/Forms';

const UserPage = () => {
  //Примеры данных
  const recomended = [
    { value: 'all', label: 'All' },
    { value: 'false', label: 'Recommended' },
    { value: 'true', label: 'Not recommended' },
  ];

  //Примеры данных
  const categories = [
    { value: 'one', label: 'Один' },
    { value: 'two', label: 'Два' },
    { value: 'thre', label: 'Три' },
    { value: 'four', label: 'Чотири' },
    { value: 'five', label: 'П`ять' },
    { value: 'six', label: 'Шість' },
    { value: 'seven', label: 'Сім' },
    { value: 'eight', label: 'Вісім' },
    { value: 'nine', label: 'Дев`ять' },
    { value: 'ten', label: 'Десять' },
    { value: 'eleven', label: 'Одинадцять' },
    { value: 'twelve', label: 'Дванадцять' },
    { value: 'thirteen', label: 'Тринадцять' },
    { value: 'fourteen', label: 'Чотирнадцять' },
    { value: 'fifteen', label: 'П`ятнадцять' },
  ];

  //Обработчик, который ты вешаешь на onChange (возвратит name и value инпута)
  const handleChange = (input) => {
    //Если есть у input имя, делаем что-то с name
    if (input.name) {
      console.log(input.name);
    }

    //Если выбрано у input значение, делаем что-то с value
    if (input.value) {
      console.log(input.value);
    }
  };

  return (
    <Section>
      <TitleWrapper>
        <Title tag="h1" size="h3">
          Inputs Type Select
        </Title>
        <Fieldset col="3" colTablet="3" colMobil="1">
          <Input type="select" name="categories" options={categories} placeholder="Categories" onChange={handleChange} />
          <Input type="select" name="recomended" options={recomended} placeholder="Recomendet" onChange={handleChange} />
        </Fieldset>
      </TitleWrapper>
    </Section>
  );
};

export default UserPage;
