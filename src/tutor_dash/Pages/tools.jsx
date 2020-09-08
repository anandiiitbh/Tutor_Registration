import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import GridList from "@material-ui/core/GridList";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ForumIcon from "@material-ui/icons/Forum";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HelpIcon from "@material-ui/icons/Help";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    margin: "10px",
    marginRight: "10px",
  },
  content: {
    zIndex: 50,
    width: "100vw",
    marginTop: "51px",
    position: "fixed",
    padding: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
  },
  gridList: {
    marginTop: "102px",
    height: "85vh",
  },
  // expandOpen: {
  //   transform: "rotate(180deg)",
  // },
  avatar: {
    backgroundColor: red[500],
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
  paper: {
    width: 300,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <main className={classes.content}>
      <CssBaseline />
      <GridList cellHeight={180} className={classes.gridList}>
        <div style={{ width: "100vw", display: "flex", flexWrap: "wrap" }}>
          <Card className={classes.root}>
            <CardHeader
              className={classes.avatar}
              avatar={
                <Avatar aria-label="recipe">
                  <ReceiptIcon fontSize="large" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Tutor's center"
              subheader="Article, Blogs (By and for) Tutors"
            />
            <CardMedia
              className={classes.media}
              image={require("./../Component/paella.jpg")}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <IconButton
                className={classes.expand}
                style={{ justifyContent: "center" }}
                // onClick={handleExpandClick}
                aria-label="Visit"
              >
                <b>𝒱𝒾𝓈𝒾𝓉 𝐻𝑒𝓇𝑒</b>
                <ArrowRightIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardHeader
              className={classes.avatar}
              avatar={
                <Avatar aria-label="recipe">
                  <ForumIcon fontSize="large" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Tutor's Community"
              subheader="Here Tutor solves issues of each other"
            />
            <CardMedia
              className={classes.media}
              image={require("./../Component/paella.jpg")}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <IconButton
                className={classes.expand}
                style={{ justifyContent: "center" }}
                // onClick={handleExpandClick}
                aria-label="Visit"
              >
                <b>𝒱𝒾𝓈𝒾𝓉 𝐻𝑒𝓇𝑒</b>
                <ArrowRightIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardHeader
              className={classes.avatar}
              avatar={
                <Avatar aria-label="recipe">
                  <LibraryBooksIcon fontSize="large" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Resources for Teaching"
              subheader="Teaching materials & other Stuffs"
            />
            <CardMedia
              className={classes.media}
              image={require("./../Component/paella.jpg")}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <IconButton
                className={classes.expand}
                style={{ justifyContent: "center" }}
                // onClick={handleExpandClick}
                aria-label="Visit"
              >
                <b>𝒱𝒾𝓈𝒾𝓉 𝐻𝑒𝓇𝑒</b>
                <ArrowRightIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardHeader
              className={classes.avatar}
              avatar={
                <Avatar aria-label="recipe">
                  <HelpIcon fontSize="large" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Ask for Help"
              subheader="Help and Support"
            />
            <CardMedia
              className={classes.media}
              image={require("./../Component/paella.jpg")}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <br />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <IconButton
                className={classes.expand}
                style={{ justifyContent: "center" }}
                // onClick={handleExpandClick}
                aria-label="Visit"
              >
                <b>𝒱𝒾𝓈𝒾𝓉 𝐻𝑒𝓇𝑒</b>
                <ArrowRightIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardHeader
              className={classes.avatar}
              avatar={
                <Avatar aria-label="recipe">
                  <AssignmentIndIcon fontSize="large" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Test your Skills wid us"
              subheader="Show your skills to our team, for your better progress"
            />
            <CardMedia
              className={classes.media}
              image={require("./../Component/paella.jpg")}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <IconButton
                className={classes.expand}
                style={{ justifyContent: "center" }}
                // onClick={handleExpandClick}
                aria-label="Visit"
              >
                <b>𝒱𝒾𝓈𝒾𝓉 𝐻𝑒𝓇𝑒</b>
                <ArrowRightIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardHeader
              className={classes.avatar}
              avatar={
                <Avatar aria-label="recipe">
                  <VideoLibraryIcon fontSize="large" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Test your Videos and Contents"
              subheader="Our experts will give fair reviews and advise."
            />
            <CardMedia
              className={classes.media}
              image={require("./../Component/paella.jpg")}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <IconButton
                className={classes.expand}
                style={{ justifyContent: "center" }}
                // onClick={handleExpandClick}
                aria-label="Visit"
              >
                <b>𝒱𝒾𝓈𝒾𝓉 𝐻𝑒𝓇𝑒</b>
                <ArrowRightIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </GridList>
    </main>
  );
}
