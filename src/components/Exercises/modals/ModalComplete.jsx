import { Arrow } from '../Arrow';
import { Button } from '../../Buttons';
import { Div, Img, Title, Span, SecondSpan, SubSpan, LinkToDiary } from './ModalComplete.styled';

const ModalComplete = ({ onComplete, time = '3 minutes', calories = 150 }) => {
  return (
    <Div>
      <Img src="/src/images/like-1x.png" srcSet="/src/images/like-1x.png 1x, /src/images/like-2x.png 2x" alt="like" />
      <Title>Well done</Title>
      <Span>
        Your time: <SubSpan>{time}</SubSpan>
      </Span>
      <SecondSpan>
        Burned calories: <SubSpan>{calories}</SubSpan>{' '}
      </SecondSpan>
      <Button to={'/products'} onClick={() => onComplete(false)}>
        Next product
      </Button>
      <LinkToDiary to={'/diary'} onClick={() => onComplete(false)}>
        To the diary <Arrow />
      </LinkToDiary>
    </Div>
  );
};

export default ModalComplete;
