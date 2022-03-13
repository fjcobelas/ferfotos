import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

const Home = () => <span>Inicio</span>;

const About = () => <span>Fotos</span>;

const Users = () => <span>Contacto</span>;

const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Bienvenido a la pagina de Fotos de Fer</h1>
        
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
       
        <h2>
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Inicio</Button>
            </LinkContainer>
            <LinkContainer to="/about">
              <Button>Fotos</Button>
            </LinkContainer>
            <LinkContainer to="/users">
              <Button>Contacto</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
      </Jumbotron>
    </Container>
  </MemoryRouter>
);

export default App;