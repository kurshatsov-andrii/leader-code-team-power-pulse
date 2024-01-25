import { useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { selectDiaryProducts } from '../../../redux/diary/selectors';
import { selectUsers } from '../../../redux/auth/selectors';
import { ProductItem } from '../ProductsItem';
import {
  DiarySections,
  DiaryTitle,
  DiaryLink,
  NextIconWrapper,
  WrapTitlesTablet,
  DiarySupTitleTablet,
  DiaryLists,
  SectionsWrapTitle,
  EmptyText,
} from '../Diary.styled';

export const DiaryProducts = () => {
  const products = useSelector(selectDiaryProducts);
  const user = useSelector(selectUsers);
  const navigate = useNavigate();

  return (
    <DiarySections>
      <SectionsWrapTitle>
        <DiaryTitle>Products</DiaryTitle>
        <DiaryLink onClick={() => navigate('/products')}>
          Add product
          <NextIconWrapper>
            <use href={`${sprite}#icon-arrow-right`} />
          </NextIconWrapper>
        </DiaryLink>
      </SectionsWrapTitle>

      {products.length !== 0 && user ? (
        <>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <WrapTitlesTablet>
              <DiarySupTitleTablet width="204px">Title</DiarySupTitleTablet>
              <DiarySupTitleTablet width="128px">Category</DiarySupTitleTablet>
              <DiarySupTitleTablet width="90px">Calories</DiarySupTitleTablet>
              <DiarySupTitleTablet width="90px">Weight</DiarySupTitleTablet>
              <DiarySupTitleTablet width="80px">Recommend</DiarySupTitleTablet>
            </WrapTitlesTablet>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <WrapTitlesTablet>
              <DiarySupTitleTablet width="212px">Title</DiarySupTitleTablet>
              <DiarySupTitleTablet width="166px">Category</DiarySupTitleTablet>
              <DiarySupTitleTablet width="105px">Calories</DiarySupTitleTablet>
              <DiarySupTitleTablet width="105px">Weight</DiarySupTitleTablet>
              <DiarySupTitleTablet width="110px">Recommend</DiarySupTitleTablet>
            </WrapTitlesTablet>
          </MediaQuery>
          <DiaryLists>
            {products.map((product) => {
              return <ProductItem product={product} key={product._id} blood={user.blood} />;
            })}
          </DiaryLists>
        </>
      ) : (
        <EmptyText>Not found products</EmptyText>
      )}
    </DiarySections>
  );
};
