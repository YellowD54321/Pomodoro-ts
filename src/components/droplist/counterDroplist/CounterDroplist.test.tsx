import { act, render, screen } from '@testing-library/react';
import CounterDroplist from './CounterDroplist';
import userEvent from '@testing-library/user-event';

describe('counter drop list', () => {
  test('render', () => {
    const initialValue = '50';
    const handleChange = jest.fn();
    render(
      <CounterDroplist onChange={handleChange} initialValue={initialValue}>
        <option value="50">50</option>
        <option value="45">45</option>
        <option value="40">40</option>
      </CounterDroplist>,
    );
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  test('render options', () => {
    const initialValue = '50';
    const handleChange = jest.fn();
    render(
      <CounterDroplist onChange={handleChange} initialValue={initialValue}>
        <option value="50">50</option>
        <option value="45">45</option>
        <option value="40">40</option>
      </CounterDroplist>,
    );
    const options = screen.getAllByRole('option');
    expect(options[1]).toHaveValue('45');
  });

  test('onChange is called', async () => {
    const user = userEvent.setup();
    const initialValue = '50';
    const handleChange = jest.fn();
    render(
      <CounterDroplist onChange={handleChange} initialValue={initialValue}>
        <option value="50">50</option>
        <option value="45">45</option>
        <option value="40">40</option>
      </CounterDroplist>,
    );
    const select = screen.getByRole('combobox');
    await act(() => user.selectOptions(select, '45'));
    expect(handleChange).toHaveBeenCalled();
  });

  test('change value', async () => {
    const user = userEvent.setup();
    const initialValue = '50';
    const handleChange = jest.fn();
    render(
      <CounterDroplist onChange={handleChange} initialValue={initialValue}>
        <option value="50">50</option>
        <option value="45">45</option>
        <option value="40">40</option>
      </CounterDroplist>,
    );
    const select = screen.getByRole('combobox');
    await act(() => user.selectOptions(select, '45'));
    expect(select).toHaveValue('45');
  });
});
