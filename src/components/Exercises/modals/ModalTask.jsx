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
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { addExercise } from '../../../redux/diary/operations';
import { parser } from '../../../services/utils/seconds-parser';
const options = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const ModalTask = ({ exerciseTask, onClick, onComplete, setResult }) => {
  const dispatch = useDispatch();
  const [isPause, setIsPause] = useState(true);
  const [exercise, setExercise] = useState({ exerciseId: exerciseTask._id, time: 0, calories: 0 });

  const onStart = () => {
    setIsPause((prev) => !prev);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (exercise.time < 5) {
      toast.error('Minimum 5 sec.', options);
      return;
    }
    const date = format(new Date(), 'dd-MM-yyyy');
    const data = {
      ...exercise,
      date,
    };
    setResult({ time: parser(exercise.time), calories: exercise.calories });
    delete data.calories;
    dispatch(addExercise(data));
    setExercise({ exerciseId: null, time: 0, calories: 0 });
    onClick();
    onComplete();
  };
  const { name, bodyPart, equipment, gifUrl, target, burnedCalories, time } = exerciseTask;
  const cooldown = time * 60;
  const calculation = (remainingTime) => {
    const newTime = cooldown - remainingTime;
    const burnedCal = Math.round((newTime * burnedCalories) / cooldown);
    setExercise((prev) => {
      return { ...prev, time: newTime, calories: burnedCal };
    });
  };

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
          onComplete={() => onStart()}
          onUpdate={(remainingTime) => calculation(remainingTime)}
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
          Burned calories: <SubSpanBC>{exercise.calories}</SubSpanBC>
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
        <ButtonModalSubmit onSubmit={onSubmit} isPause={isPause}>
          Add to Diary
        </ButtonModalSubmit>
      </DivFieldAndButton>
    </Div>
  );
};

export default ModalTask;
