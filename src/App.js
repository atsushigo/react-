import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import News from "./pages/News";
import Marketing from "./pages/Marketing";
import About from "./pages/About";
import Partners from "./pages/Partners";
import { ThemeProvider } from "styled-components";
import useTheme from "./useTheme";
import i18n from './react-i18next-config';
import {isMobile} from './Constants';


const App = () => {
  const theme = useTheme();  
  return (
    <ThemeProvider theme={theme} i18n={i18n}>
      <Router>
        <div className="App">
          {isMobile?<MobileNav />:<Nav />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/marketing" component={Marketing} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/news" component={News} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
