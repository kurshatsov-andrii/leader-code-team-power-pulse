import { TitleWrapperContainer } from './TitleWrapper.styled';

const TitleWrapper = ({ width, justify = 'flex-start', gap = '20', children }) => {
  return (
    <TitleWrapperContainer data-width={width} data-justify={justify} data-gap={gap}>
      {children}
    </TitleWrapperContainer>
  );
};

export default TitleWrapper;
