import './App.css';
import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Container>
      <Router>
      <Header/>
        <Switch>
          <Route path = "/home">
            <Home/>
          </Route>
          <Route path = "/about">
            <About/>
          </Route>
          <Route path = "/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top:50px;
  max-width:1100px;

`