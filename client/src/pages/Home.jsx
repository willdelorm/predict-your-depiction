import { useState } from "react";
import {
  calculateFaceLocations,
  setRequestOptions,
} from "../utils/clarifai.utils";

import FaceRecognition from "../components/FaceRecognition";
import ImageLinkForm from "../components/ImageLinkForm";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Rank from "../components/Rank";

const Home = ({ user, setUser }) => {
  const [boxes, setBoxes] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [input, setInput] = useState("");

  const displayFaceBoxes = (boxes) => {
    if (boxes) {
      setBoxes(boxes);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDetectFace = () => {
    setImageUrl(input);

    fetch(
      "https://api.clarifai.com/v2/models/face-detection/outputs",
      setRequestOptions(input)
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              setUser({ ...user, entries: count });
            })
            .catch((err) => console.log("update entries count error", err));
        }
        displayFaceBoxes(calculateFaceLocations(result));
      })
      .catch((error) => console.log("face detection fetch error", error));
  };

  return (
    <div>
      <Navigation />
      <div className="mt-3">
        <Logo />
        <Rank name={user.name} entries={user.entries} />
        <ImageLinkForm
          onInputChange={handleInputChange}
          onSubmit={handleDetectFace}
        />
        <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default Home;
