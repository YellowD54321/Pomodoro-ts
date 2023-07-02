import styled from "styled-components";

const Input = styled.input`
  width: 100%;
`;

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledWorkContentInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={onChange} />;
};

export default StyledWorkContentInput;
