import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Contact from './components/contact';
import NotFound from './components/beep';
import Resume from './components/resume';
import Footer from './components/footer';

import './assets/css/App.css';

// create react routes for all pages
function App() {
  return (
    <Router>
      <Header />
      <div className="meat">
        <Route exact path={["/about", "/"]}>
          <AboutMe />
        </Route>

        <Route exact path="/archive">
          <Projects />
        </Route>

        <Route exact path="/resume">
          <Resume />
        </Route>

        <Route exact path="/beepboopnotfound">
          <NotFound />
        </Route>

        <Route exact path="/no spam pls">
          <h2>@:-)</h2>
        </Route>

        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
