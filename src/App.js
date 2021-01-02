
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import {Container,Jumbotron} from 'react-bootstrap';

import './App.css';

import Header from './Components/header';
import Footer from './Components/footer';
import Academics from './Components/AcademicsComponent/Academics';
import Gallery from './Components/GalleryComponent/Gallery';
import Home from './Components/HomeComponent/Home';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header />
        
        <Container >
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/academics" component={Academics} />
                <Route exact path="/gallery" component={Gallery} />
                <Route component={PageNotFound} />
              </Switch>
            </Router>
        </Container>
          
      <Footer/>
    </div>
  );
}

export default App;
