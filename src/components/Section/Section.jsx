import { useState, useEffect } from 'react';
import { SectionContainer, Container } from './Section.styled';

const Section = ({ backgrounds = {}, children }) => {
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
    <SectionContainer data-background={backgrounds} visibility={isVisible ? 'true' : 'false'}>
      <Container>{children}</Container>
    </SectionContainer>
  );
};

export default Section;
