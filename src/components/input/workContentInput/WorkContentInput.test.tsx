import { render, screen } from "@testing-library/react";
import WorkContentInput from "./WorkContentInput";
import userEvent from "@testing-library/user-event";

describe("work content input", () => {
  test("render", () => {
    let text = "";
    const setText = jest.fn();
    render(<WorkContentInput text={text} setText={setText} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("display current text", () => {
    let text = "test";
    const setText = jest.fn();
    render(<WorkContentInput text={text} setText={setText} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue(text);
  });

  test("setText triggered when change the input value", async () => {
    const user = userEvent.setup();
    let text = "test";
    const setText = jest.fn();
    render(<WorkContentInput text={text} setText={setText} />);
    const input = screen.getByRole("textbox");
    await user.type(input, "123");
    expect(setText).toHaveBeenCalledTimes(3);
  });

  test("change input value", async () => {
    const user = userEvent.setup();
    let text = "test";
    const setText = jest.fn((s) => (text = s));
    const { rerender } = render(
      <WorkContentInput text={text} setText={setText} />
    );
    let input = screen.getByRole("textbox");
    await user.type(input, "1");
    rerender(<WorkContentInput text={text} setText={setText} />);
    await user.type(input, "2");
    rerender(<WorkContentInput text={text} setText={setText} />);
    await user.type(input, "3");
    rerender(<WorkContentInput text={text} setText={setText} />);
    input = screen.getByRole("textbox");
    expect(input).toHaveValue("test123");
  });
});
