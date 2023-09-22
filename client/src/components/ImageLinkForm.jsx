import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="mb-4">
      <p className="text-white fs-3 mb-3">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>

      <InputGroup className="bg-warning bg-gradient center p-4 rounded shadow w-50 mx-auto">
        <Form.Control
          type="text"
          placeholder="Enter URL here"
          onChange={onInputChange}
        />
        <Button variant="primary" id="detect" onClick={onSubmit}>
          Detect
        </Button>
      </InputGroup>
    </div>
  );
};

export default ImageLinkForm;
