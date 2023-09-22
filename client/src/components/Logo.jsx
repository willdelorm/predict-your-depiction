import brain from "../assets/brain.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div className="center mb-4 opacity-75">
      <Tilt>
        <div
          className="bg-warning bg-gradient p-3 center rounded shadow"
          style={{
            height: "200px",
            width: "200px",
          }}
        >
          <img src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
