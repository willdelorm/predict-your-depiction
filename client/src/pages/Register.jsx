import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Card, Form } from "react-bootstrap";
import Navigation from "../components/Navigation";

const Register = ({ loadUser }) => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formFields),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user && user.email) {
          loadUser(user);
          navigate("/");
        }
      })

      .catch((err) => console.log("signin error", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields((formFields) => ({ ...formFields, [name]: value }));
  };

  return (
    <>
      <Navigation />

      <Card
        className="w-25 my-4 mx-auto p-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6" }}
      >
        <Form id="register" className="mb-3">
          <Form.Label className="fs-1 fw-bold">Register</Form.Label>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              value={formFields.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              value={formFields.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              value={formFields.password}
            />
          </Form.Group>

          <Button variant="secondary" type="submit" onClick={handleRegister}>
            Register
          </Button>
        </Form>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/signin")}>
          Sign In
        </p>
      </Card>
    </>
  );
};

export default Register;
