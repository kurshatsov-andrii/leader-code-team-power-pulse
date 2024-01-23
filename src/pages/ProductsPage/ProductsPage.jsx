import desctop from '../../images/products-1x.jpg';
import desctopretina from '../../images/products-2x.jpg';
import tablet from '../../images/products-tablet-2x.jpg';
import tabletretina from '../../images/products-tablet-2x.jpg';
import mobil from '../../images/products-mobil-2x.jpg';
import mobilretina from '../../images/products-mobil-2x.jpg';

import Section from 'components/Section/Section';
import { Title } from 'components/Typography';
import { ProductsFilters } from '../../components/products/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../components/products/ProductsList/ProductsList';
import { ProductsTitleWrapper } from './ProductsPage.styled';

const ProductsPage = () => {
  return (
    <Section
      backgrounds={{
        desctop,
        desctopretina,
        tablet,
        tabletretina,
        mobil,
        mobilretina,
      }}
    >
      <ProductsTitleWrapper>
        <Title tag="h1" size="h3">
          Products
        </Title>
      </ProductsTitleWrapper>
      <ProductsFilters></ProductsFilters>
      <ProductsList></ProductsList>
    </Section>
  );
};

export default ProductsPage;
