import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar, Home, About, Projects, Contact, NotFound404 } from './Components';
import './styles/app.css';


class App extends React.Component {
    render() {
      return (
        <div id="app">
          <header>
          <NavBar>
          </NavBar>
          </header>
        <section>
          <Switch>
            
            <Route exact path="/" component={Home} />

            <Route path="/about" component={About} />

            <Route path="/projects" component={Projects} />

            <Route path="/contact" component={Contact} />

            <Route component={NotFound404} />
          </Switch>
        </section>
        {/* <Footer /> */}
        </div>
      )
    }
  }
export default App