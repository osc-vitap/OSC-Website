import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Events from './components/pages/EventsPage/Events';
import AboutPage from "./components/pages/About/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/events" exact component={Events}/>
        <Route path="/about" exact component={AboutPage}/>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
