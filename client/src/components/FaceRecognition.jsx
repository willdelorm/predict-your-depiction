const FaceRecognition = ({ boxes, imageUrl }) => {
  return (
    <div className="center">
      <div className="position-absolute">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {boxes.map((box, index) => {
          return (
            <div
              key={index}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
