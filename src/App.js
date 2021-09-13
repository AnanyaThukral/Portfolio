import './App.css';
import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import About from './About'
import IntLTracker from './IntLTracker';
import NokiaCoop from './NokiaCoop'
import Footer from './Footer'
import WebClones from './WebClones'
import MaskDetector from './MaskDetector'
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
          <Route path = "/intLTracker">
            <IntLTracker/>
          </Route>
          <Route path = "/NokiaCoop">
            <NokiaCoop/>
          </Route>
          <Route path = "/webClones">
            <WebClones/>
          </Route>
          <Route path = "/MaskDetector">
            <MaskDetector/>
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
  max-width:1100px;
  margin: 0 auto;
  margin-top:50px;
  @media (max-width: 1300px){
        max-width: 900px;
    }
`