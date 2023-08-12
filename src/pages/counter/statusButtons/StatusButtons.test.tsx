import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-utils";
import StatusButtons from "./StatusButtons";
import { act } from "react-dom/test-utils";

describe("status buttons", () => {
  test("render", () => {
    const onClick = jest.fn();
    render(<StatusButtons onClickButton={onClick} />);
    const startButton = screen.getByText("Start");
    const pauseButton = screen.getByText("Pause");
    const stopButton = screen.getByText("Stop");
    expect(startButton).toBeInTheDocument();
    expect(pauseButton).toBeInTheDocument();
    expect(stopButton).toBeInTheDocument();
  });

  test("start button is disabled when start counting", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<StatusButtons onClickButton={onClick} />);
    const startButton = screen.getByText("Start");
    await act(() => user.click(startButton));
    expect(startButton).toBeDisabled();
  });

  test("pause button is disabled when not counting", () => {
    const onClick = jest.fn();
    render(<StatusButtons onClickButton={onClick} />);
    const pauseButton = screen.getByText("Pause");
    expect(pauseButton).toBeDisabled();
  });

  test("stop button is disabled when not counting", () => {
    const onClick = jest.fn();
    render(<StatusButtons onClickButton={onClick} />);
    const stopButton = screen.getByText("Stop");
    expect(stopButton).toBeDisabled();
  });
});
