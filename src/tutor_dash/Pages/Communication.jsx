import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Badge from "@material-ui/core/Badge";
import RateReviewIcon from "@material-ui/icons/RateReview";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import ListSubheader from "@material-ui/core/ListSubheader";
import MailIcon from "@material-ui/icons/Mail";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
  },
  appBar: {
    marginTop: "51px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginTop: "51px",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    marginTop: "51px",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop: "51px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    zIndex: 50,
    width: "100vw",
    padding: theme.spacing(3),
  },
  gridList: {
    height: "70vh",
  },
  paper: {
    width: "100%",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;
  function ViewContent(view) {
    return (
      <main className={classes.content}>
        <CssBaseline />
        <GridListTile
          key="Subheader"
          style={{ height: "auto", marginTop: "71px" }}
        >
          <ListSubheader component="div">Inbox</ListSubheader>
        </GridListTile>
        <GridList cellHeight={180} cols={1} className={classes.gridList}>
          <div>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </GridList>
      </main>
    );
  }
  const [header, headerSet] = useState("Message Inbox");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {header}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => headerSet("Message Inbox")}>
            <ListItemIcon>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Message Inbox" />
          </ListItem>
          <ListItem button onClick={() => headerSet("Assignments")}>
            <ListItemIcon>
              <Badge badgeContent={1} color="error">
                <AssignmentIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Assignments" />
          </ListItem>
          <ListItem button onClick={() => headerSet("Announcements")}>
            <ListItemIcon>
              <Badge badgeContent={0} color="error">
                <SurroundSoundIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Announcements" />
          </ListItem>
          <ListItem button onClick={() => headerSet("Reviews")}>
            <ListItemIcon>
              <Badge badgeContent={4} color="error">
                <RateReviewIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItem>
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      {ViewContent(1)}
    </div>
  );
}
