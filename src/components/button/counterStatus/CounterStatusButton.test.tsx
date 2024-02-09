import { render, screen } from '@testing-library/react';
import { PauseButton, StartButton, StopButton } from './CounterStatusButton';
import { getDisplayContent } from '../../../utils/button/counterStatusButton';
import userEvent from '@testing-library/user-event';

describe('start button', () => {
  test('render', () => {
    const handleClickButton = jest.fn();
    render(<StartButton onClick={handleClickButton} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('display correct text', () => {
    const handleClickButton = jest.fn();
    render(<StartButton onClick={handleClickButton} />);
    const buttonText = getDisplayContent('start');
    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
  });

  test('button click', async () => {
    const user = userEvent.setup();
    const handleClickButton = jest.fn();
    render(<StartButton onClick={handleClickButton} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(handleClickButton).toHaveBeenCalled();
  });

  test('can be disable', () => {
    const handleClickButton = jest.fn();
    render(<StartButton onClick={handleClickButton} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

describe('pause button', () => {
  test('render', () => {
    const handleClickButton = jest.fn();
    render(<PauseButton onClick={handleClickButton} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('display correct text', () => {
    const handleClickButton = jest.fn();
    render(<PauseButton onClick={handleClickButton} />);
    const buttonText = getDisplayContent('pause');
    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
  });

  test('button click', async () => {
    const user = userEvent.setup();
    const handleClickButton = jest.fn();
    render(<PauseButton onClick={handleClickButton} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(handleClickButton).toHaveBeenCalled();
  });

  test('can be disable', () => {
    const handleClickButton = jest.fn();
    render(<PauseButton onClick={handleClickButton} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

describe('stop button', () => {
  test('render', () => {
    const handleClickButton = jest.fn();
    render(<StopButton onClick={handleClickButton} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('display correct text', () => {
    const handleClickButton = jest.fn();
    render(<StopButton onClick={handleClickButton} />);
    const buttonText = getDisplayContent('stop');
    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
  });

  test('button click', async () => {
    const user = userEvent.setup();
    const handleClickButton = jest.fn();
    render(<StopButton onClick={handleClickButton} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(handleClickButton).toHaveBeenCalled();
  });

  test('can be disable', () => {
    const handleClickButton = jest.fn();
    render(<StopButton onClick={handleClickButton} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
