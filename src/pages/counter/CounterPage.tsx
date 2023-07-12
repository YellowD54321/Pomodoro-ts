import { useState } from "react";
import BasicCounter from "../../components/counter/basicCounter/BasicCounter";
import { CounterStatusType } from "../../types";
import CounterPageWrapper from "./CounterPage.styles";
import WorkContent from "../../components/workContent/WorkContent";
import StatusButtons from "../../components/workContent/statusButtons/StatusButtons";
import WorkDroplist from "../../components/droplist/workDroplist/WorkDroplist";
import RestDroplist from "../../components/droplist/restDroplist/RestDroplist";

const CounterPage = () => {
  const [workTime, setWorkTime] = useState(50 * 60);
  const [restTime, setRestTime] = useState(50 * 60);
  const [workStatus, setWorkStatus] = useState<CounterStatusType>("stop");
  const [restStatus, setRestStatus] = useState<CounterStatusType>("stop");
  const [workContentText, setWorkContentText] = useState("");

  const handleChangeWorkTime = (value: string) => {
    setWorkTime(Number(value) * 60);
  };

  const handleChangeRestTime = (value: string) => {
    setRestTime(Number(value) * 60);
  };

  return (
    <CounterPageWrapper>
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
      <WorkDroplist onChange={handleChangeWorkTime} />
      <RestDroplist onChange={handleChangeRestTime} />
      <WorkContent text={workContentText} setText={setWorkContentText} />
      <StatusButtons
        workStatus={workStatus}
        setWorkStatus={setWorkStatus}
        restStatus={restStatus}
        setRestStatus={setRestStatus}
      />
    </CounterPageWrapper>
  );
};

export default CounterPage;
