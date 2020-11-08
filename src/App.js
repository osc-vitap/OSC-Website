import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Events from './components/pages/EventsPage/Events';
import AboutPage from "./components/pages/About/AboutPage";
import TeamPage from "./components/pages/Team/Team";
import Team18 from "./components/pages/Team/Team18";
import Team19 from "./components/pages/Team/Team19";
import Team20 from "./components/pages/Team/Team20";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/events" exact component={Events}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/team" exact component={TeamPage}/>
        <Route path="/team2018" exact component={Team18}/>
        <Route path="/team2019" exact component={Team19}/>
        <Route path="/team2020" exact component={Team20}/>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
