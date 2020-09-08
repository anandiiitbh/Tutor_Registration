import React from "react";
import "./upgrade.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10%",
    float: "center",
    padding: 15,
  },
  paper: {
    height: 300,
    width: 300,
  },
}));

export default function Upgrade() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.root} justify="center">
        <Grid item>
          <Paper className={classes.paper}>
            <div className="product-details">
              <h1>Upgrade to PRO</h1>
              {/* <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span> */}
              <p className="information">
                " Especially good for container gardening, the Angelonia will
                keep blooming all summer even if old flowers are removed. "
              </p>

              <div className="controll">
                <button className="btnn">
                  <span className="price">₹ 149</span>
                  <span className="shopping-cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                  <span className="buy">UpGrade</span>
                </button>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <div className="product-image">
              <img
                src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg"
                alt="Omar Dsoky"
              />

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
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
