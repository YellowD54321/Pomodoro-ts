import { CounterStatusType } from "../../types";
import {
  getNextStatus,
  isCounting,
  isPausing,
  isStopping,
} from "./counterStatus";

describe("check status", () => {
  test("is counting", () => {
    let status = "start" as CounterStatusType;
    expect(isCounting(status)).toBe(true);
    status = "pause";
    expect(isCounting(status)).toBe(false);
  });

  test("is pausing", () => {
    let status = "pause" as CounterStatusType;
    expect(isPausing(status)).toBe(true);
    status = "start";
    expect(isPausing(status)).toBe(false);
  });

  test("is stopping", () => {
    let status = "stop" as CounterStatusType;
    expect(isStopping(status)).toBe(true);
    status = "pause";
    expect(isStopping(status)).toBe(false);
  });
});

describe("get next status", () => {
  describe("press start", () => {
    const buttonStatus = "start" as CounterStatusType;

    test("work and rest are stop", () => {
      const work = "stop" as CounterStatusType;
      const rest = "stop" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe("start");
      expect(restStatus).toBe(rest);
    });

    test("work is pause and rest is stop", () => {
      const work = "pause" as CounterStatusType;
      const rest = "stop" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe("start");
      expect(restStatus).toBe(rest);
    });

    test("work is pause and rest is pause", () => {
      const work = "pause" as CounterStatusType;
      const rest = "pause" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe("start");
      expect(restStatus).toBe(rest);
    });

    test("work is stop and rest is pause", () => {
      const work = "stop" as CounterStatusType;
      const rest = "pause" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe(work);
      expect(restStatus).toBe("start");
    });

    test("other status which shouldn't be changed", () => {
      type Status = {
        work: CounterStatusType;
        rest: CounterStatusType;
      };
      const statuses = [
        { work: "start", rest: "start" },
        { work: "start", rest: "pause" },
        { work: "start", rest: "stop" },
        { work: "pause", rest: "start" },
        { work: "stop", rest: "start" },
      ] as Status[];

      for (const status of statuses) {
        const { workStatus, restStatus } = getNextStatus(
          status.work,
          status.rest,
          buttonStatus
        );
        expect(workStatus).toBe(status.work);
        expect(restStatus).toBe(status.rest);
      }
    });
  });

  describe("press pause", () => {
    const buttonStatus = "pause" as CounterStatusType;

    test("work and rest are start", () => {
      const work = "start" as CounterStatusType;
      const rest = "start" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe("pause");
      expect(restStatus).toBe(rest);
    });

    test("work is start and rest is pause", () => {
      const work = "start" as CounterStatusType;
      const rest = "pause" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe("pause");
      expect(restStatus).toBe(rest);
    });

    test("work is start and rest is stop", () => {
      const work = "start" as CounterStatusType;
      const rest = "stop" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe("pause");
      expect(restStatus).toBe(rest);
    });

    test("work is pause and rest is start", () => {
      const work = "pause" as CounterStatusType;
      const rest = "start" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe(work);
      expect(restStatus).toBe("pause");
    });

    test("work is stop and rest is start", () => {
      const work = "stop" as CounterStatusType;
      const rest = "start" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe(work);
      expect(restStatus).toBe("pause");
    });

    test("other status which shouldn't be changed", () => {
      type Status = {
        work: CounterStatusType;
        rest: CounterStatusType;
      };
      const statuses = [
        { work: "pause", rest: "pause" },
        { work: "pause", rest: "stop" },
        { work: "stop", rest: "pause" },
        { work: "stop", rest: "stop" },
      ] as Status[];

      for (const status of statuses) {
        const { workStatus, restStatus } = getNextStatus(
          status.work,
          status.rest,
          buttonStatus
        );
        expect(workStatus).toBe(status.work);
        expect(restStatus).toBe(status.rest);
      }
    });
  });

  describe("press stop", () => {
    const buttonStatus = "stop" as CounterStatusType;

    test("work is start and rest is stop", () => {
      const work = "start" as CounterStatusType;
      const rest = "stop" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe("stop");
      expect(restStatus).toBe("start");
    });

    test("work is pause and rest is stop", () => {
      const work = "pause" as CounterStatusType;
      const rest = "stop" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe("stop");
      expect(restStatus).toBe("start");
    });

    test("work is stop and rest is start", () => {
      const work = "stop" as CounterStatusType;
      const rest = "start" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe(work);
      expect(restStatus).toBe("stop");
    });

    test("work is stop and rest is pause", () => {
      const work = "stop" as CounterStatusType;
      const rest = "pause" as CounterStatusType;
      const { workStatus, restStatus } = getNextStatus(
        work,
        rest,
        buttonStatus
      );
      expect(workStatus).toBe(work);
      expect(restStatus).toBe("stop");
    });

    test("weird status which shouldn't exsit. clear if exist", () => {
      type Status = {
        work: CounterStatusType;
        rest: CounterStatusType;
      };
      const statuses = [
        { work: "start", rest: "start" },
        { work: "start", rest: "pause" },
        { work: "pause", rest: "start" },
        { work: "pause", rest: "pause" },
        { work: "stop", rest: "stop" },
      ] as Status[];

      for (const status of statuses) {
        const { workStatus, restStatus } = getNextStatus(
          status.work,
          status.rest,
          buttonStatus
        );
        expect(workStatus).toBe("stop");
        expect(restStatus).toBe("stop");
      }
    });
  });
});
