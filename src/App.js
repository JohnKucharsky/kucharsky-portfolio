import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Nav from "./Nav";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState(true);
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<AboutMe language={language} />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 90%;
  background-color: #fff;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
