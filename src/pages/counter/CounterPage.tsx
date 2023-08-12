import { useRef, useState } from "react";
import CounterPageWrapper from "./CounterPage.styles";
import WorkContent from "./workContent/WorkContent";
import StatusButtons from "./statusButtons/StatusButtons";
import WorkDroplist from "../../components/droplist/workDroplist/WorkDroplist";
import RestDroplist from "../../components/droplist/restDroplist/RestDroplist";
import WorkCounter from "../../components/counter/workCounter/WorkCounter";
import RestCounter from "../../components/counter/restCounter/RestCounter";
import Navigation from "../../components/navigation/Navigation";
import { CounterStatusType } from "../../types";
import { isCounting, isStopping } from "../../utils/status/counterStatus";
import { postDuration } from "../../utils/api/apis";
import { IDateTime } from "./CounterPage.types";
import { IPostDurationBody } from "../../utils/api/apis.types";
import useInformationWindow from "../../hooks/useInformationWindow/useInformationWindow";
import { DURATION_MESSAGE } from "../../message";

const defaultDateTime = {
  start: null,
  end: null,
};

const CounterPage = () => {
  const workDateTime = useRef<IDateTime>({ ...defaultDateTime });
  const restDateTime = useRef<IDateTime>({ ...defaultDateTime });
  const [workTime, setWorkTime] = useState(50 * 60);
  const [restTime, setRestTime] = useState(50 * 60);
  const [workContentText, setWorkContentText] = useState("");
  const { openInformationWindow } = useInformationWindow();

  const handleChangeWorkTime = (value: string) => {
    setWorkTime(Number(value) * 60);
  };

  const handleChangeRestTime = (value: string) => {
    setRestTime(Number(value) * 60);
  };

  const setDateTime = (
    durationType: "work" | "rest",
    actionType: "start" | "end"
  ) => {
    const now = new Date();
    if (durationType === "work" && actionType === "start") {
      if (!workDateTime.current.start) {
        workDateTime.current.start = now;
      }
    } else if (durationType === "work" && actionType === "end") {
      if (!workDateTime.current.end) {
        workDateTime.current.end = now;
      }
    } else if (durationType === "rest" && actionType === "start") {
      if (!restDateTime.current.start) {
        restDateTime.current.start = now;
      }
    } else if (durationType === "rest" && actionType === "end") {
      if (!restDateTime.current.end) {
        restDateTime.current.end = now;
      }
    }
  };

  const clearDateTime = () => {
    workDateTime.current = { ...defaultDateTime };
    restDateTime.current = { ...defaultDateTime };
  };

  const handleSetDateTime = (
    nextWorkStatus: CounterStatusType,
    nextRestStatus: CounterStatusType
  ) => {
    const isWorkStart =
      isCounting(nextWorkStatus) && isStopping(nextRestStatus);
    const isWorkEnd = isStopping(nextWorkStatus) && isCounting(nextRestStatus);
    const isRestStart =
      isStopping(nextWorkStatus) && isCounting(nextRestStatus);
    const isRestEnd = isStopping(nextWorkStatus) && isStopping(nextRestStatus);
    if (isWorkStart) {
      setDateTime("work", "start");
    }
    if (isWorkEnd) {
      setDateTime("work", "end");
    }
    if (isRestStart) {
      setDateTime("rest", "start");
    }
    if (isRestEnd) {
      setDateTime("rest", "end");
    }
  };

  const handlePostDuration = async (
    nextWorkStatus: CounterStatusType,
    nextRestStatus: CounterStatusType
  ): Promise<void> => {
    const isWorkEnd = isStopping(nextWorkStatus) && isCounting(nextRestStatus);
    const isRestEnd = isStopping(nextWorkStatus) && isStopping(nextRestStatus);

    if (!isWorkEnd && !isRestEnd) {
      return;
    }

    if (isWorkEnd) {
      if (!workDateTime.current.start) {
        return;
      }
      const postBody: IPostDurationBody = {
        start_time: workDateTime.current.start,
        type: "work",
        description: workContentText,
      };
      if (workDateTime.current.end) {
        postBody.end_time = workDateTime.current.end;
      }
      try {
        await postDuration(postBody);
      } catch (err) {
        console.error(err);
        openInformationWindow(DURATION_MESSAGE.POST_FAIL("work"));
      }
      return;
    }

    if (!restDateTime.current.start) {
      return;
    }
    const postBody: IPostDurationBody = {
      start_time: restDateTime.current.start,
      type: "rest",
      description: workContentText,
    };
    if (restDateTime.current.end) {
      postBody.end_time = restDateTime.current.end;
    }
    try {
      await postDuration(postBody);
    } catch (err) {
      console.error(err);
      openInformationWindow(DURATION_MESSAGE.POST_FAIL("work"));
    }
    clearDateTime();
    return;
  };

  const handleClickStatusButton = (
    nextWorkStatus: CounterStatusType,
    nextRestStatus: CounterStatusType
  ) => {
    handleSetDateTime(nextWorkStatus, nextRestStatus);
    handlePostDuration(nextWorkStatus, nextRestStatus);
  };

  return (
    <CounterPageWrapper>
      <Navigation />
      <WorkCounter
        time={workTime}
        setTime={setWorkTime}
        initialTime={50 * 60}
      />
      <RestCounter
        time={restTime}
        setTime={setRestTime}
        initialTime={50 * 60}
      />
      <WorkDroplist onChange={handleChangeWorkTime} />
      <RestDroplist onChange={handleChangeRestTime} />
      <WorkContent text={workContentText} setText={setWorkContentText} />
      <StatusButtons onClickButton={handleClickStatusButton} />
    </CounterPageWrapper>
  );
};

export default CounterPage;
