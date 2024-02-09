import { render, screen } from '@testing-library/react';
import FavoriteWordButton from './FavoriteWordButton';
import userEvent from '@testing-library/user-event';

describe('favorite word button', () => {
  test('render', () => {
    const handleClickButton = jest.fn();
    const text = 'Study';
    render(<FavoriteWordButton text={text} onClick={handleClickButton} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('display correct text', () => {
    const handleClickButton = jest.fn();
    const text = 'Study';
    render(<FavoriteWordButton text={text} onClick={handleClickButton} />);
    const button = screen.getByRole('button', { name: text });
    expect(button).toBeInTheDocument();
  });

  test('button click', async () => {
    const user = userEvent.setup();
    const handleClickButton = jest.fn();
    const text = 'Study';
    render(<FavoriteWordButton text={text} onClick={handleClickButton} />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClickButton).toHaveBeenCalled();
  });
});
