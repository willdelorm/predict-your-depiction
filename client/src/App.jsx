import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

import ParticlesBg from "particles-bg";

function App() {
  const [user, setUser] = useState({});

  const loadUser = (user) => {
    const { id, name, email, entries, joined, age, pet } = user;
    setUser({
      id,
      name,
      email,
      entries,
      joined,
      age,
      pet,
    });
  };

  return (
    <div className="app">
      <ParticlesBg type="cobweb" bg={true} num={30} />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/signin" element={<SignIn loadUser={loadUser} />} />
        <Route path="/register" element={<Register loadUser={loadUser} />} />
      </Routes>
    </div>
  );
}

export default App;
