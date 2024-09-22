import { Button } from "antd";
import "./LandingComponent.scss";
import { useNavigate } from "react-router-dom";

const LandingComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <h1 className="slogan">Uncover Hidden Gems and Classic Favorites!</h1>

      <Button type="primary" className="button" onClick={()=>{
        navigate("search");
      }}>
        Get Started
      </Button>
    </div>
  );
};

export default LandingComponent;
