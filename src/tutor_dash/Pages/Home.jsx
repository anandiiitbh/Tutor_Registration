import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Background from "./../raw/frame1.png";
import Background1 from "./../raw/frame2.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./upgrade.css";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    marginTop: "55px",
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(28),
      height: theme.spacing(35),
    },
  },
  large: {
    // marginLeft: "35%",
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  paper: {
    // margin: "15px",
  },
  card_div1: {
    paddingTop: "36px",
    paddingLeft: "36%",
    backgroundImage: `url(${Background1})`,
    backgroundPosition: "50% 0%",
    height: "50%",
    width: "100%",
    backgroundSize: "60% 100%",
    backgroundRepeat: "no-repeat",
  },
  card_div: {
    paddingTop: "34px",
    paddingLeft: "34%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "50%  0% ",
    height: "50%",
    width: "100%",
    backgroundSize: "60% 100%",
    backgroundRepeat: "no-repeat",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={10} className={classes.paper}>
        <div className="product-image">
          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li>
                <strong>Sun Needs: </strong>Full Sun
              </li>
              <li>
                <strong>Soil Needs: </strong>Damp
              </li>
              <li>
                <strong>Zones: </strong>9 - 11
              </li>
              <li>
                <strong>Height: </strong>2 - 3 feet
              </li>
              <li>
                <strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall
              </li>
              <li>
                <strong>Features: </strong>Tolerates heat
              </li>
            </ul>
          </div>
          <div className={classes.card_div1}>
            <Avatar
              alt="Anand Kumar"
              src={require("./../Component/anand_about.png")}
              className={classes.large}
            />
          </div>
          <div>
            <center>
              <p
                style={{
                  fontFamily: "'Lobster', cursive",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Anand Kumar
              </p>
              <p
                style={{
                  fontFamily: "'Architects Daughter', cursive",
                  fontSize: "16px",
                  marginBottom: "0px",
                }}
              >
                Mathematics, English, Science, Hindi, Social-Studies, Sanskrit,
              </p>
            </center>
          </div>
          <div>
            <center>
              <FacebookIcon style={{ position: "absolute", bottom: "10px" }} />
            </center>
          </div>
        </div>
      </Paper>
      {/* <Paper elevation={10} className={classes.paper}>
        <div className={classes.card_div1}>
          <Avatar
            alt="Anand Kumar"
            src={require("./../Component/anand_about.png")}
            className={classes.large}
          />
        </div>
        <center>
          <p style={{ fontFamily: "'Lobster', cursive", fontSize: "24px" }}>
            Anand Kumar
          </p>
        </center>
      </Paper>
      <Paper elevation={10} className={classes.paper}>
        <div className={classes.card_div}>
          <Avatar
            alt="Anand Kumar"
            src={require("./../Component/anand_about.png")}
            className={classes.large}
          />
        </div>
        <center>
          <p style={{ fontFamily: "'Lobster', cursive", fontSize: "24px" }}>
            Anand Kumar
          </p>
        </center>
      </Paper>
      
      <Paper elevation={10} className={classes.paper}>
        <div className={classes.card_div}>
          <Avatar
            alt="Anand Kumar"
            src={require("./../Component/anand_about.png")}
            className={classes.large}
          />
        </div>
        <center>
          <p style={{ fontFamily: "'Lobster', cursive", fontSize: "24px" }}>
            Anand Kumar
          </p>
        </center>
      </Paper> */}
    </div>
  );
}
