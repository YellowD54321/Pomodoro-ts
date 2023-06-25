import StyledWorkContentInput from "./WorkContentInput.styles";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const WorkContentInput = ({ text, setText }: Props) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setText(value);
  };

  return <StyledWorkContentInput value={text} onChange={handleChangeValue} />;
};

export default WorkContentInput;
