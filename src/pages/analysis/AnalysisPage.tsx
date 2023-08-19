import CreateTestDataButton from "../../components/button/createTestDataButton/CreateTestDataButton";
import Navigation from "../../components/navigation/Navigation";
import { StyledAnalysisPage } from "./AnalysisPage.styles";

const AnalysisPage = () => {
  return (
    <StyledAnalysisPage>
      <Navigation />
      <CreateTestDataButton />
    </StyledAnalysisPage>
  );
};

export default AnalysisPage;
