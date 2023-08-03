import { useState } from "react";
import CounterPageWrapper from "./CounterPage.styles";
import WorkContent from "../../components/workContent/WorkContent";
import StatusButtons from "../../components/workContent/statusButtons/StatusButtons";
import WorkDroplist from "../../components/droplist/workDroplist/WorkDroplist";
import RestDroplist from "../../components/droplist/restDroplist/RestDroplist";
import WorkCounter from "../../components/counter/workCounter/WorkCounter";
import RestCounter from "../../components/counter/restCounter/RestCounter";
import Navigation from "../../components/navigation/Navigation";

const CounterPage = () => {
  const [workTime, setWorkTime] = useState(50 * 60);
  const [restTime, setRestTime] = useState(50 * 60);
  const [workContentText, setWorkContentText] = useState("");

  const handleChangeWorkTime = (value: string) => {
    setWorkTime(Number(value) * 60);
  };

  const handleChangeRestTime = (value: string) => {
    setRestTime(Number(value) * 60);
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
      <StatusButtons />
    </CounterPageWrapper>
  );
};

export default CounterPage;
