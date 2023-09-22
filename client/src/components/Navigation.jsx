import { useLocation, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navSignedInView = (
    <Navbar expand="md" className="bg-transparent">
      <Container>
        <Navbar.Brand className="fs-2 text-white">
          Predict Your Depiction
        </Navbar.Brand>
        <Nav className="fs-4">
          <Nav.Link className="text-white mx-3">
            <p onClick={() => navigate("/signin")}>Sign Out</p>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

  const navSignedOutView = (
    <Navbar expand="md" className="bg-transparent">
      <Container>
        <Navbar.Brand className="fs-2 text-white">Smart Brain</Navbar.Brand>
        <Nav className="fs-4">
          <Nav.Link className="text-white mx-3">
            <p onClick={() => navigate("/signin")}>Login</p>
          </Nav.Link>
          <Nav.Link className="text-white mx-3">
            <p onClick={() => navigate("/register")}>Register</p>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

  return location.pathname === "/" ? navSignedInView : navSignedOutView;
};

export default Navigation;
