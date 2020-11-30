import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Events from './components/pages/EventsPage/Events';
import AboutPage from "./components/pages/About/AboutPage";
import TeamPage from "./components/pages/Team/Team";
import Team18 from "./components/pages/Team/Team18";
import Team19 from "./components/pages/Team/Team19";
import Team20 from "./components/pages/Team/Team20";
import TeamWIOS from './components/pages/Team/TeamWIOS';
import Testimonials from './components/pages/Testimonials/Testimonials';
import EBOpenings from './components/pages/EBOpenings/EBOpenings';
import Gallery from './components/pages/Gallery/Gallery';
import ContactUs from './components/pages/Contact/ContactUs';
import Sponsorships from './components/pages/Sponsorships/Sponsorships';
import EBElections from './components/pages/EBElections/EBElections';
import Wios from "./components/pages/WIOS/Wios";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/events" exact component={Events}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/team" exact component={TeamPage}/>
        <Route path="/team2018" exact component={Team18}/>
        <Route path="/team2019" exact component={Team19}/>
        <Route path="/team2020" exact component={Team20}/>
        <Route path="/wiosteam2020" exact component={TeamWIOS}/>
        <Route path="/testimonials" exact component={Testimonials}/>
        <Route path="/ebopenings" exact component={EBOpenings}/>
        <Route path="/gallery" exact component={Gallery}/>
        <Route path="/contact" exact component={ContactUs}/>
        <Route path="/sponsorships" exact component={Sponsorships}/>
        <Route path="/ebelections" exact component={EBElections}/>
        <Route path="/wioshome" exact component={Wios}/>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
