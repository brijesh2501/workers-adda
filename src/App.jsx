import React , {Component} from 'react';
// import logo from 
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import news from './components/news';
import Navbar from './components/CustomNavbar';

class App extends Component{
	render(){
		return (
			 <Router>
			 <div>
			 <Navbar />
              <Route exact path="/" component={home}/>
              <Route path="/about" component={about}/>
              <Route path="/news" component={news}/>
			 </div>
             </Router>
			);
	}
}

export default App;