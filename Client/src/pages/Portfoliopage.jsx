import { useParams } from "react-router-dom";
import mockProfiles from "../utils/mockProfile";
import TemplateOne from "../components/templates/TemplateOne";
import TemplateTwo from "../components/templates/TemplateTwo";

const PortfolioPage = () => {
  const { id } = useParams();
  const profile = mockProfiles.find((p) => p.id === Number(id));

  if (!profile) return <div>Profile Not Found</div>;

  return profile.template === "TemplateOne" ? (
    <TemplateOne profile={profile} />
  ) : (
    <TemplateTwo profile={profile} />
  );
};

export default PortfolioPage;
