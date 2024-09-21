import { Button, ConfigProvider } from "antd";
import "./LandingComponent.scss";
import { Colors } from "../../utils/colors/colors";
Colors;
const LandingComponent = () => {
  return (
    <div className="landing-container">
      <h1 className="slogan">Uncover Hidden Gems and Classic Favorites!</h1>
      
      <Button type="primary"  className="button">Get Started</Button>
   
    </div>
  );
};

export default LandingComponent;
