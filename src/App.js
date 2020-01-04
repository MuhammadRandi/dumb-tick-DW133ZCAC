import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import MenuNav from "./components/menuComponent/Menu";
import Home from "./components/home/Home"
import Music from "./components/categories/Music"
import SportsPage from "./components/categories/Sports";
import Profile from "./components/categories/Profile"
import Footer from"./components/home/footer"
import EventPage from "./components/items/event/event";
import MyTickets from "./components/categories/MyTickets";
import AddEvent from "./components/items/event/addEvent";
import Payment from "./components/categories/Payment";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuNav />
        <Route path="/" exact component={Home} />
        <Route path="/music" component={Music}/>
        <Route path="/sport" component={SportsPage}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/event" component={EventPage}/>
        <Route path='/ticket' component={MyTickets}/>
        <Route path='/addevent' component={AddEvent}/>
        <Route path='/payment' component={Payment}/>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
