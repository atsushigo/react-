import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import CodeIcon from "@material-ui/icons/Code";
import GroupIcon from "@material-ui/icons/Group";
import BookIcon from "@material-ui/icons/Book";
import ChatIcon from "@material-ui/icons/Chat";
import { createGlobalStyle } from "styled-components";
import style from "styled-theming";
import {
  StyledDiv,
  StyledAppBar,
  StyledList,
  StyledListItemIcon
} from "../toggle/StyledComponents";
import LangSelector from "./LangSelect";
import ToggleMode from "../toggle/ToggleButton";
import { withTranslation } from 'react-i18next'; 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex"
  },
  button: {
    justifyContent: "space-around",
    display: "flex",
    margin: "auto",
    fontSize: "1.5em",
    fontWeight: "300",
    textDecoration: "none",
    color: "black"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

const getBackground = style("mode", {
  light: "#fafafa",
  dark: "#2e2e30"
});
const getForeground = style("mode", {
  light: "#5A5A5A",
  dark: "#EEE"
});

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${getBackground};
    color: ${getForeground};
  }
  `;
const getBg = style("mode", {
  light: "#f8f9f9",
  dark: "#2e2e30"
});
const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  background-color: ${getBg};
`;


const Nav = props => {
  const classes = useStyles();

  const [sideDrawer, setSideDrawer] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideDrawer(open);
  };

  const {t} = props; 
  const NavItems = [
    {path: '/', name: t("header.home")},
    {path: 'https://cggame.info/play/', name: t("header.games")},
    {path: '/marketing', name: t("header.marketing")},
    {path: '/partners', name: t("header.partners")},
    {path: '/news', name: t("header.news")},
    {path: '/about', name: t("header.about")}
  ];

  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <StyledList style={{ minHeight: "100vh" }}>
        {NavItems.map(
          (item, index) => (
            <ListItem
              button
              key={item.path}
              onClick={e => {
                if (index === 1) {
                  e.preventDefault();
                  window.location.href = item.path;
                  return null;
                }
                props.history.push(item.path);
              }}
            >
              <StyledListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <EventIcon />}
                {index === 2 && <CodeIcon />}
                {index === 3 && <GroupIcon />}
                {index === 4 && <BookIcon />}
                {index === 5 && <ChatIcon />}
              </StyledListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        )}
      </StyledList>
    </div>
  );  
 
  return (
    <Fragment>
      <GlobalStyle />
      <StyledDiv className={classes.root}>
        <MobileDiv>
          <StyledAppBar position="fixed" className>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/" style={{ display: "contents", color: "inherit" }}>
                <Typography variant="h6" className={classes.title}>
                  <img src="./img/logo.png" height="32" width="80"  alt="Logo"/>
                </Typography>                
              </Link>
              <LangSelector />
              <span>&nbsp;&nbsp;</span>
              <ToggleMode
                style={{
                  float: "right"
                }}
              />
            </Toolbar>
          </StyledAppBar>
          <StyledSwipeableDrawer
            anchor={"left"}
            open={sideDrawer}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </StyledSwipeableDrawer>
        </MobileDiv>
      </StyledDiv>
    </Fragment>
  );
};
const MobileDiv = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export default withRouter(withTranslation() (Nav));
