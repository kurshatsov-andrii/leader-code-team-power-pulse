import { TextContainer } from './TextContent.styled';
import { useState, useEffect } from 'react';

const TextContent = ({ width, justify = 'flex-start', gap = '20', children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 20);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <TextContainer data-width={width} data-justify={justify} data-gap={gap} visibility={isVisible ? 'true' : 'false'}>
      {children}
    </TextContainer>
  );
};

export default TextContent;
