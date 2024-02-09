import CounterDroplist from '../counterDroplist/CounterDroplist';
import { RestDroplistProps } from './RestDroplist.types';

const RestDroplist = ({ onChange }: RestDroplistProps) => {
  const initialValue = '10';

  const handleChangeValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <CounterDroplist onChange={handleChangeValue} initialValue={initialValue}>
      <option value="30">30</option>
      <option value="25">25</option>
      <option value="20">20</option>
      <option value="15">15</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </CounterDroplist>
  );
};
export default RestDroplist;
