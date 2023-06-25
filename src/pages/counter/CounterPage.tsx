import React, { useState } from "react";
import BasicCounter from "../../components/counter/basicCounter/BasicCounter";
import { CounterStatusType } from "../../types";
import CounterPagePaper from "./CounterPage.styles";
import WorkContent from "../../components/workContent/WorkContent";
import StatusButtons from "../../components/workContent/statusButtons/StatusButtons";

const CounterPage = () => {
  const [workTime, setWorkTime] = useState(50 * 60);
  const [restTime, setRestTime] = useState(50 * 60);
  const [workStatus, setWorkStatus] = useState<CounterStatusType>("stop");
  const [restStatus, setRestStatus] = useState<CounterStatusType>("stop");
  const [workContentText, setWorkContentText] = useState("");

  return (
    <CounterPagePaper>
      <BasicCounter
        time={workTime}
        setTime={setWorkTime}
        status={workStatus}
        initialTime={50 * 60}
      />
      <BasicCounter
        time={restTime}
        setTime={setRestTime}
        status={restStatus}
        initialTime={50 * 60}
      />
      <WorkContent text={workContentText} setText={setWorkContentText} />
      <StatusButtons
        workStatus={workStatus}
        setWorkStatus={setWorkStatus}
        restStatus={restStatus}
        setRestStatus={setRestStatus}
      />
    </CounterPagePaper>
  );
};

export default CounterPage;
