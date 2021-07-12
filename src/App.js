import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';

// import logo from './logo.svg';
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <Header />
      <div class="meat">
        <AboutMe />
        <Projects />
        <Blog />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
