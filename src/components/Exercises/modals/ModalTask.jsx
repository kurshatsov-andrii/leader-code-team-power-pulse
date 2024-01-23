import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { ButtonModalSubmit } from '../../Buttons/ButtonModalSubmit/ButtonModalSubmit';
import { ButtonModalIcon } from '../../Buttons/ButtonModalIcon/ButtonModalIcon';
import { useState } from 'react';
import { Play, Pause } from './Icons';
import {
  Div,
  DivFieldAndButton,
  DivGifAndTimer,
  Img,
  SpanTime,
  SubSpanBC,
  SpanBurnedCalories,
  FieldWrapper,
  Field,
  FieldTitle,
  FieldValue,
} from './ModalTask.styled';

const ModalTask = ({ exerciseTask }) => {
  const [isPause, setIsPause] = useState(true);

  const onStart = () => {
    setIsPause((prev) => !prev);
  };

  const { name, bodyPart, equipment, gifUrl, target, burnedCalories, time } = exerciseTask;
  const cooldown = time ? time * 60 : 3 * 60;
  console.log(exerciseTask);
  const arr = [
    {
      title: 'Name',
      value: name,
    },
    {
      title: 'Target',
      value: target,
    },
    {
      title: 'Body Part',
      value: bodyPart,
    },
    {
      title: 'Equipment',
      value: equipment,
    },
  ];
  return (
    <Div>
      <DivGifAndTimer>
        <Img $gifUrl={gifUrl} src={gifUrl} alt={`Exercise ${name}`} />
        <SpanTime>time</SpanTime>
        <CountdownCircleTimer
          strokeWidth={4}
          duration={cooldown}
          isPlaying={!isPause}
          size={124}
          colors={'#E6533C'}
          onComplete={() => {
            onStart();
          }}
          onUpdate={(remainingTime) => {
            console.log(remainingTime);
          }}
        >
          {({ remainingTime }) => {
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;
            return `${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
          }}
        </CountdownCircleTimer>
        <ButtonModalIcon type="button" onClick={onStart}>
          {isPause ? <Play /> : <Pause />}
        </ButtonModalIcon>
        <SpanBurnedCalories>
          Burned calories: <SubSpanBC>{burnedCalories}</SubSpanBC>
        </SpanBurnedCalories>
      </DivGifAndTimer>
      <DivFieldAndButton>
        <FieldWrapper>
          {arr.map(({ title, value }, key) => {
            return (
              <Field key={key}>
                <FieldTitle>{title}</FieldTitle>
                <FieldValue>{value}</FieldValue>
              </Field>
            );
          })}
          {/* <div>
          <span>Name</span>
          <span>{name}</span>
        </div>
        <div>
          <span>Target</span>
          <span>{target}</span>
        </div>
        <div>
          <span>Body Part</span>
          <span>{bodyPart}</span>
        </div>
        <div>
          <span>Equipment</span>
          <span>{equipment}</span>
        </div> */}
        </FieldWrapper>
        <ButtonModalSubmit>Add to Diary</ButtonModalSubmit>
      </DivFieldAndButton>
    </Div>
  );
};

export default ModalTask;
