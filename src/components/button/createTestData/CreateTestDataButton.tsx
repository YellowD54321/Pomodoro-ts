import { MouseEventHandler } from "react";
import { StyledCreateTestDataButton } from "./CreateTestDataButton.styles";
import { createTestData } from "../../../utils/api/apis";
import { AxiosError } from "axios";
import useInformationWindow from "../../../hooks/useInformationWindow/useInformationWindow";
import { DURATION_MESSAGE } from "../../../message";

const CreateTestDataButton = () => {
  const { openInformationWindow } = useInformationWindow();

  const handleClick: MouseEventHandler = async () => {
    try {
      const data = await createTestData();
      console.log("test data", data);
      openInformationWindow(DURATION_MESSAGE.POST_TEST_DATA_SUCCESS);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err);
      openInformationWindow(DURATION_MESSAGE.POST_TEST_DATA_FAIL);
    }
  };

  return (
    <StyledCreateTestDataButton onClick={handleClick}>
      Create Some Test Data
    </StyledCreateTestDataButton>
  );
};

export default CreateTestDataButton;
