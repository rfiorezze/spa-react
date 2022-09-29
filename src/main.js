// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component About
import About from "./components/about/about";

import Description from "./components/description/description";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Routes ,Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Container>
      <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/description' element={<Description/>} />
      </Routes >
    </Container>
  </main>  
);

export default Main;