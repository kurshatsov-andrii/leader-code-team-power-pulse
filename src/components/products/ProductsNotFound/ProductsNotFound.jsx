import { Text } from '../../Typography';
import { ProductsNotFoundContainer, SelectedOrangeText } from './ProductsNotFound.styled';

const ProductsNotFound = () => {
  return (
    <ProductsNotFoundContainer>
      <Text>
        <SelectedOrangeText>Sorry, no results were found</SelectedOrangeText> for the product filters you selected. You may want to consider other
        search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs.
      </Text>
      <Text>
        <SelectedOrangeText>Try changing the search parameters.</SelectedOrangeText>
      </Text>
    </ProductsNotFoundContainer>
  );
};
export default ProductsNotFound;
