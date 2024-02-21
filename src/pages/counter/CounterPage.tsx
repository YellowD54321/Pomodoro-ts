import { useRef, useState } from 'react';
import CounterPageWrapper, {
  CounterContainer,
  StyledCounter,
  StyledCounters,
} from './CounterPage.styles';
import WorkContent from './workContent/WorkContent';
import StatusButtons from './statusButtons/StatusButtons';
import WorkDroplist from '../../components/droplist/workDroplist/WorkDroplist';
import RestDroplist from '../../components/droplist/restDroplist/RestDroplist';
import WorkCounter from '../../components/counter/workCounter/WorkCounter';
import RestCounter from '../../components/counter/restCounter/RestCounter';
import { CounterStatusType } from '../../types';
import {
  isRestEnd,
  isRestStart,
  isWorkEnd,
  isWorkStart,
} from '../../utils/status/counterStatus';
import { postDuration } from '../../utils/api/apis';
import { IDateTime } from './CounterPage.types';
import { IPostDurationBody } from '../../utils/api/apis.types';
import useInformationWindow from '../../hooks/useInformationWindow/useInformationWindow';
import { DURATION_MESSAGE } from '../../message';
import { isLogin } from '../../utils/token/loginToken';

const defaultDateTime = {
  start: null,
  end: null,
};

const CounterPage = () => {
  const workDateTime = useRef<IDateTime>({ ...defaultDateTime });
  const restDateTime = useRef<IDateTime>({ ...defaultDateTime });
  const [workTime, setWorkTime] = useState(50 * 60);
  const [restTime, setRestTime] = useState(10 * 60);
  const [workContentText, setWorkContentText] = useState('');
  const { openInformationWindow } = useInformationWindow();

  const handleChangeWorkTime = (value: string) => {
    setWorkTime(Number(value) * 60);
  };

  const handleChangeRestTime = (value: string) => {
    setRestTime(Number(value) * 60);
  };

  const clearDateTime = () => {
    workDateTime.current = { ...defaultDateTime };
    restDateTime.current = { ...defaultDateTime };
  };

  const handleSetDateTime = (
    nextWorkStatus: CounterStatusType,
    nextRestStatus: CounterStatusType,
  ) => {
    const now = new Date();
    if (isWorkStart(nextWorkStatus, nextRestStatus)) {
      if (!workDateTime.current.start) {
        workDateTime.current.start = now;
      }
    }
    if (isWorkEnd(nextWorkStatus, nextRestStatus)) {
      if (!workDateTime.current.end) {
        workDateTime.current.end = now;
      }
    }
    if (isRestStart(nextWorkStatus, nextRestStatus)) {
      if (!restDateTime.current.start) {
        restDateTime.current.start = now;
      }
    }
    if (isRestEnd(nextWorkStatus, nextRestStatus)) {
      if (!restDateTime.current.end) {
        restDateTime.current.end = now;
      }
    }
  };

  const handlePostDuration = async (
    nextWorkStatus: CounterStatusType,
    nextRestStatus: CounterStatusType,
  ): Promise<void> => {
    if (
      !isWorkEnd(nextWorkStatus, nextRestStatus) &&
      !isRestEnd(nextWorkStatus, nextRestStatus)
    ) {
      return;
    }

    if (isWorkEnd(nextWorkStatus, nextRestStatus)) {
      if (!workDateTime.current.start) {
        return;
      }
      const postBody: IPostDurationBody = {
        start_time: workDateTime.current.start,
        type: 'WORK',
        description: workContentText,
      };
      if (workDateTime.current.end) {
        postBody.end_time = workDateTime.current.end;
      }
      try {
        await postDuration(postBody);
        // patch user setting: work initial time and rest initial time
      } catch (err) {
        console.error(err);
        openInformationWindow(DURATION_MESSAGE.POST_FAIL('WORK'));
      }
      return;
    }

    if (!restDateTime.current.start) {
      return;
    }
    const postBody: IPostDurationBody = {
      start_time: restDateTime.current.start,
      type: 'REST',
      description: workContentText,
    };
    if (restDateTime.current.end) {
      postBody.end_time = restDateTime.current.end;
    }
    try {
      await postDuration(postBody);
    } catch (err) {
      console.error(err);
      openInformationWindow(DURATION_MESSAGE.POST_FAIL('REST'));
    }
    clearDateTime();
    return;
  };

  const handleClickStatusButton = async (
    nextWorkStatus: CounterStatusType,
    nextRestStatus: CounterStatusType,
  ) => {
    handleSetDateTime(nextWorkStatus, nextRestStatus);

    if (!isLogin()) return;

    await handlePostDuration(nextWorkStatus, nextRestStatus);
  };

  return (
    <CounterPageWrapper>
      <CounterContainer>
        <StyledCounters>
          <StyledCounter>
            <h4>Work time</h4>
            <WorkCounter
              time={workTime}
              setTime={setWorkTime}
              initialTime={50 * 60}
            />
            <WorkDroplist onChange={handleChangeWorkTime} />
          </StyledCounter>
          <StyledCounter>
            <h4>Rest time</h4>
            <RestCounter
              time={restTime}
              setTime={setRestTime}
              initialTime={50 * 60}
            />
            <RestDroplist onChange={handleChangeRestTime} />
          </StyledCounter>
        </StyledCounters>

        <WorkContent text={workContentText} setText={setWorkContentText} />
        <StatusButtons onClickButton={handleClickStatusButton} />
      </CounterContainer>
    </CounterPageWrapper>
  );
};

export default CounterPage;
