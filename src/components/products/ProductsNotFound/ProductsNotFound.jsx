import { Text, TextContent } from '../../Typography';

const ProductsNotFound = () => {
  return (
    <div>
      <TextContent>
        <Text>
          <span>Sorry, no results were found</span> for the product filters you selected. You may want to consider other search options to find the
          product you want. Our range is wide and you have the opportunity to find more options that suit your needs.
          <span>Try changing the search parameters.</span>
        </Text>
      </TextContent>
    </div>
  );
};
export default ProductsNotFound;
