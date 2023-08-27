import { useState } from "react";
import CreateTestDataButton from "../../components/button/createTestData/CreateTestDataButton";
import BarChart from "../../components/chart/barChart/BarChart";
import {
  getAnalysisesWithDay,
  getAnalysisesWithMonth,
} from "../../utils/api/apis";
import {
  AnalysisChart,
  FilterButtons,
  StyledAnalysisPage,
} from "./AnalysisPage.styles";
import { IAnalysis } from "../../utils/api/apis.types";
import { ChartData } from "../../components/chart/barChart/BarChart.types";
import {
  addDay,
  addMonth,
  subtractDay,
  subtractYear,
} from "../../utils/time/calculate";
import { COLORS } from "../../constants";
import FilterButton from "../../components/button/filter/FilterButton";
import {
  getBeginDate,
  getEndDate,
  isDuringTargetDate,
} from "../../utils/time/check";
import {
  getThisSaturday,
  getThisSunday,
  getThisYearBeginDate,
  getThisYearEndDate,
} from "../../utils/time/getTime";
import { IDateFilter } from "./AnalysosPage.types";
import dayjs from "dayjs";

const WEEK_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const MONTH_LABELS = [
  "Jan",
  "Fab",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const AnalysisPage = () => {
  const [currentAnalysises, setCurrentAnalysises] = useState<IAnalysis[]>([]);
  const [lastAnalysises, setLastAnalysises] = useState<IAnalysis[]>([]);
  const [dateFilter, setDateFilter] = useState<IDateFilter>("week");

  const getLabels = (filter: IDateFilter): string[] => {
    switch (filter) {
      case "month":
        return MONTH_LABELS;
      case "week":
      default:
        return WEEK_LABELS;
    }
  };

  const addZeroToAnalysises = (
    analysises: IAnalysis[],
    beginDate: Date | string,
    type: "day" | "month",
    step: number = 0
  ): IAnalysis[] => {
    const resultAnalysises = [...analysises];
    for (let i = 0; i < step; i++) {
      const date =
        type === "day" ? addDay(beginDate, i) : addMonth(beginDate, i);
      const hasData = resultAnalysises.some((analysis) =>
        isDuringTargetDate(analysis.label, date)
      );
      if (!hasData) {
        const format = type === "day" ? "YYYY-MM-DD" : "YYYY-MM";
        resultAnalysises.push({
          label: dayjs(date).format(format),
          amount: 0,
          minute: 0,
        });
      }
    }
    resultAnalysises.sort((a, b) => a.label.localeCompare(b.label));
    return resultAnalysises;
  };

  const addZeroToAnalysisesWithWeek = (
    analysises: IAnalysis[],
    beginDate: Date | string
  ): IAnalysis[] => {
    return addZeroToAnalysises(analysises, beginDate, "day", 7);
  };

  const addZeroToAnalysisesWithYear = (
    analysises: IAnalysis[],
    beginDate: Date | string
  ): IAnalysis[] => {
    return addZeroToAnalysises(analysises, beginDate, "month", 12);
  };

  const getWorkAnalysisesWithDay = async (
    beginDate: Date | string,
    endDate: Date | string
  ) => {
    const { analysises } = await getAnalysisesWithDay({
      begin_date: beginDate,
      end_date: endDate,
      type: "work",
      description: "",
    });
    return addZeroToAnalysisesWithWeek(analysises, beginDate);
  };

  const getWorkAnalysisesWithMonth = async (
    beginDate: Date | string,
    endDate: Date | string
  ) => {
    const { analysises } = await getAnalysisesWithMonth({
      begin_date: beginDate,
      end_date: endDate,
      type: "work",
      description: "",
    });
    return addZeroToAnalysisesWithYear(analysises, beginDate);
  };

  const handleClickWeekFilterButton = async () => {
    const DAYS = 7;
    const thisWeekBeginDay = getBeginDate(getThisSunday());
    const thisWeekEndDay = getEndDate(getThisSaturday());
    const lastWeekBeginDay = getBeginDate(subtractDay(thisWeekBeginDay, DAYS));
    const lastWeekEndDay = getEndDate(subtractDay(thisWeekBeginDay, 1));
    const thisWeekAnalysises = await getWorkAnalysisesWithDay(
      thisWeekBeginDay,
      thisWeekEndDay
    );
    const lastWeekAnalysises = await getWorkAnalysisesWithDay(
      lastWeekBeginDay,
      lastWeekEndDay
    );
    setDateFilter("week");
    setCurrentAnalysises(thisWeekAnalysises);
    setLastAnalysises(lastWeekAnalysises);
  };

  const handleClickYearFilterButton = async () => {
    const thisYearBeginDay = getThisYearBeginDate();
    const thisYearEndDay = getThisYearEndDate();
    const lastYearBeginDay = subtractYear(thisYearBeginDay, 1);
    const lastYearEndDay = subtractYear(thisYearEndDay, 1);
    const thisYearAnalysises = await getWorkAnalysisesWithMonth(
      thisYearBeginDay,
      thisYearEndDay
    );
    const lastYearAnalysises = await getWorkAnalysisesWithMonth(
      lastYearBeginDay,
      lastYearEndDay
    );
    setDateFilter("month");
    setCurrentAnalysises(thisYearAnalysises);
    setLastAnalysises(lastYearAnalysises);
  };

  const chartData: ChartData = {
    labels: getLabels(dateFilter),
    datasets: [
      {
        label: "Last week",
        data: lastAnalysises.map((analysis) => analysis.minute),
        backgroundColor: COLORS.BARCHART_LAST,
      },
      {
        label: "This week",
        data: currentAnalysises.map((analysis) => analysis.minute),
        backgroundColor: COLORS.BARCHART_CURRENT,
      },
    ],
  };

  return (
    <StyledAnalysisPage>
      <CreateTestDataButton />

      <FilterButtons>
        <FilterButton onClick={() => handleClickWeekFilterButton()}>
          Week
        </FilterButton>
        <FilterButton onClick={() => handleClickYearFilterButton()}>
          Month
        </FilterButton>
      </FilterButtons>

      <AnalysisChart>
        <BarChart chartData={chartData} yText="Minutes" />
      </AnalysisChart>
    </StyledAnalysisPage>
  );
};

export default AnalysisPage;
