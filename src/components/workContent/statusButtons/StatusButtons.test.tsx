import { render, screen } from "@testing-library/react";
import StatusButtons from "./StatusButtons";

describe("status buttons", () => {
  test("render", () => {
    const workStatus = "stop";
    const restStatus = "stop";
    const setWorkStatus = jest.fn();
    const setRestStatus = jest.fn();
    render(
      <StatusButtons
        workStatus={workStatus}
        restStatus={restStatus}
        setWorkStatus={setWorkStatus}
        setRestStatus={setRestStatus}
      />
    );
    const startButton = screen.getByText("Start");
    const pauseButton = screen.getByText("Pause");
    const stopButton = screen.getByText("Stop");
    expect(startButton).toBeInTheDocument();
    expect(pauseButton).toBeInTheDocument();
    expect(stopButton).toBeInTheDocument();
  });

  test("start button is disabled", () => {
    const workStatus = "start";
    const restStatus = "stop";
    const setWorkStatus = jest.fn();
    const setRestStatus = jest.fn();
    render(
      <StatusButtons
        workStatus={workStatus}
        restStatus={restStatus}
        setWorkStatus={setWorkStatus}
        setRestStatus={setRestStatus}
      />
    );
    const startButton = screen.getByText("Start");
    expect(startButton).toBeDisabled();
  });

  test("pause button is disabled", () => {
    const workStatus = "pause";
    const restStatus = "stop";
    const setWorkStatus = jest.fn();
    const setRestStatus = jest.fn();
    render(
      <StatusButtons
        workStatus={workStatus}
        restStatus={restStatus}
        setWorkStatus={setWorkStatus}
        setRestStatus={setRestStatus}
      />
    );
    const pauseButton = screen.getByText("Pause");
    expect(pauseButton).toBeDisabled();
  });

  test("stop button is disabled", () => {
    const workStatus = "stop";
    const restStatus = "stop";
    const setWorkStatus = jest.fn();
    const setRestStatus = jest.fn();
    render(
      <StatusButtons
        workStatus={workStatus}
        restStatus={restStatus}
        setWorkStatus={setWorkStatus}
        setRestStatus={setRestStatus}
      />
    );
    const stopButton = screen.getByText("Stop");
    expect(stopButton).toBeDisabled();
  });
});
