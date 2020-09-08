import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Upgrade from "./Pages/upgrade";
import CommMenu from "./Pages/Communication";
import MainReg from "./Pages/mainReg.jsx";
import RecipeReviewCard from "./Pages/tools";
import VideoCon from "./Pages/VideoCon";
import Setting from "./Pages/Setting";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "@material-ui/core/Avatar";
import LinearBuffer from "./Component/progress";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SettingsIcon from "@material-ui/icons/Settings";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import GroupIcon from "@material-ui/icons/Group";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CloseIcon from "@material-ui/icons/Close";
import BuildIcon from "@material-ui/icons/Build";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Badge from "@material-ui/core/Badge";
import "./maincss.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  crossmenu: {
    cursor: "pointer",
  },
});

export default function TutDash() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [view, setView] = React.useState(0);
  const [viewLoad, setViewLoad] = React.useState(0);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <CloseIcon
          fontSize="large"
          className={classes.crossmenu}
          fixed
          style={{ float: "right" }}
        />
        <List>
          <ListItem
            button
            onClick={() => {
              setView(1);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <DashboardIcon fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setView(2);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <GroupIcon fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Connections"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setView(3);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <Badge badgeContent={2} color="secondary">
                <NotificationsActiveIcon fontSize="large" color="primary" />
              </Badge>
            </ListItemIcon>
            <ListItemText primary={"Communications"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setView(4);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <AssessmentIcon fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Report"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setView(5);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <VideoCallIcon fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Video Conference"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setView(6);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <BuildIcon fontSize="large" color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Tools"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              setView(7);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <SettingsIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"Setting"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setView(8);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <PowerSettingsNewIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={"LogOut"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setView(9);
              setViewLoad(1);
            }}
          >
            <ListItemIcon>
              <Icon color="secondary">add_circle</Icon>
            </ListItemIcon>
            <ListItemText primary={"Upgrade to PRO"} />
          </ListItem>
        </List>
      </div>
    </>
  );
  function vieww(value) {
    return value === 2 ? (
      <MainReg />
    ) : value === 3 ? (
      <CommMenu />
    ) : value === 5 ? (
      <VideoCon />
    ) : value === 6 ? (
      <RecipeReviewCard />
    ) : value === 7 ? (
      <Setting />
    ) : value === 9 ? (
      <Upgrade />
    ) : (
      <Home />
    );
  }
  useEffect(() => {
    if (viewLoad === 1) {
      const timer = setTimeout(() => {
        setViewLoad(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [viewLoad]);

  function load(value) {
    return value === 1 ? <LinearBuffer /> : "";
  }

  return (
    <>
      <section className="main-container">
        {load(viewLoad)}
        <section
          style={{ position: "fixed", width: "100%", zIndex: "50" }}
          className="btn-secondary pt-1 pr-2"
        >
          <Avatar
            alt="Anand Kumar"
            style={{ float: "right" }}
            src={require("./Component/anand_about.png")}
          />
          <div>
            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuOpenIcon fontSize="large" />
                    Menu
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        {vieww(view)}
      </section>
    </>
  );
}
