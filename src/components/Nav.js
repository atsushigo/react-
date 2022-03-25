import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import "./styles/NavBar.css";
import {
  StyledAppBar,
  StyledLink
} from "../toggle/StyledComponents";
import ToggleMode from "../toggle/ToggleButton";
import { withTranslation } from 'react-i18next'; 
import LangSelector from "./LangSelect";
import {gamesUrl} from '../Constants';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  button: {
    justifyContent: "space-between",
    fontSize: "1.2em",
    fontWeight: "300",
    textDecoration: "none"
  },
  logo: {
    height: "30px",
    objectFit: "contain"
  }
}));

const NavAlt = props => {
  const classes = useStyles(); 
  const {t} = props; 
  return (
    <div className={classes.grow}>
      <ResponsiveDiv>
        <StyledAppBar position="fixed" id="appbar" className="fill">
          <Container fixed>
            <Toolbar>
              <StyledLink to="/" style={{ display: "contents" }}>
                <img src="./img/logo.png" className={classes.logo} alt="Logo"/>               
              </StyledLink>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <div>
                  <StyledLink to="/" className={classes.button}>
                    {t("header.home")}
                  </StyledLink>
                </div>
                <div>
                  <StyledLink to="/games"
                    onClick={e => {
                      e.preventDefault();
                      window.location.href = gamesUrl;
                    }}
                    target="_blank"
                    className={classes.button}
                  >
                    {t("header.games")}
                  </StyledLink>                  
                </div>
                <div>
                  <StyledLink to="/marketing" className={classes.button}>
                    {t("header.marketing")}
                  </StyledLink>
                </div>
                <div>
                  <StyledLink to="/partners" className={classes.button}>
                    {t("header.partners")}
                  </StyledLink>
                </div>
                <div>
                  <StyledLink to="/news" className={classes.button}>
                    {t("header.news")}
                  </StyledLink>
                </div>
                <div style={{ marginRight: "10px" }}>
                  <StyledLink to="/about" className={classes.button}>
                    {t("header.about")}
                  </StyledLink>
                </div>
                <LangSelector />
                <ToggleMode />
              </div>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </ResponsiveDiv>
    </div>
  );
};

const ResponsiveDiv = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export default withRouter(withTranslation() (NavAlt));
