import styled from 'styled-components';

export const TextContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${(props) => (props['data-width'] ? props['data-width'] + 'px' : '100%')};
  position: relative;
  justify-content: ${(props) => props['data-justify']};
  align-items: center;
  align-content: flex-start;
  gap: ${(props) => props['data-gap'] + 'px'};
  opacity: ${(props) => (props.visibility === 'true' ? 1 : 0)};
  transition: opacity 0.6s ease-out;
`;
