import React from "react";
import WorkContentInput from "../../../components/input/workContentInput/WorkContentInput";
import StyledWorkContent from "./WorkContent.styles";
import FavoriteWordButtons from "../favoriteWordButtons/FavoriteWordButtons";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const WorkContent = ({ text, setText }: Props) => {
  return (
    <StyledWorkContent>
      <WorkContentInput text={text} setText={setText} />
      <FavoriteWordButtons setText={setText} />
    </StyledWorkContent>
  );
};

export default WorkContent;
