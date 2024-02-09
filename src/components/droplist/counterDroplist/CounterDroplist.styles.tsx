import styled from 'styled-components';
import { CounterDroplistProps } from './CounterDroplist.types';
import { COLORS } from '../../../constants';

const Select = styled.select`
  width: 5rem;
  text-align: center;
  padding: 0.5rem;
  background-color: ${COLORS.SUB_LIGHT};
`;

const StyledCounterDroplist = ({
  children,
  value,
  onChange,
  ...rest
}: Omit<CounterDroplistProps, 'initialValue'>) => {
  return (
    <Select value={value} onChange={onChange} {...rest}>
      {children}
    </Select>
  );
};

export default StyledCounterDroplist;
