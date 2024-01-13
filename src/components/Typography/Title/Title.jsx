import { TitleContent } from './Title.styled';

const Title = ({ tag, size, children }) => {
  const Tag = tag || 'strong';

  return (
    <Tag>
      <TitleContent className={`size_${size || 'h1'}`}>{children}</TitleContent>
    </Tag>
  );
};

export default Title;
