import { Arrow } from '../Arrow';
import { Button } from '../../Buttons';
import { Div, Img, Title, Span, SecondSpan, SubSpan, LinkToDiary } from './ModalComplete.styled';

import imageLikex1 from '../../../images/like-1x.png';
import imageLikex2 from '../../../images/like-2x.png';

const ModalComplete = ({ onComplete, result }) => {
  return (
    <Div>
      <Img src="/src/images/like-1x.png" srcSet={`${imageLikex1} 1x, ${imageLikex2} 2x`} alt="like" />
      <Title>Well done</Title>
      <Span>
        Your time: <SubSpan>{result.time}</SubSpan>
      </Span>
      <SecondSpan>
        Burned calories: <SubSpan>{result.calories}</SubSpan>{' '}
      </SecondSpan>
      <Button onClick={() => onComplete()}>Next exercise</Button>
      <LinkToDiary to={'/diary'} onClick={() => onComplete()}>
        To the diary <Arrow />
      </LinkToDiary>
    </Div>
  );
};

export default ModalComplete;
