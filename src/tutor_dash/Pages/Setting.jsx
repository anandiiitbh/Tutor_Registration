import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    marginTop: "51px",
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  shoot: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function getSteps() {
  return ["Personal Details Settings", "Account settings", "Further "];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [Personalvalue, Personalvalueset] = React.useState(0);
  const [Personaldisabled, Personaldisabledset] = React.useState(true);
  const [buttonDisabled, buttonDisabledset] = React.useState(false);
  const href = "#";
  const steps = getSteps();
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <form className={classes.shoot} noValidate autoComplete="off">
              <Avatar
                alt="Anand Kumar"
                style={{ float: "right" }}
                src={require("./../Component/anand_about.png")}
              />
              <br />
              <TextField
                id="name"
                disabled={Personaldisabled}
                onChange={(event) =>
                  event.target.value === ""
                    ? buttonDisabledset(true)
                    : buttonDisabledset(false)
                }
                error={buttonDisabled}
                label="Name"
                defaultValue="Anand Kumar"
                required
              />
              {/* <br />
              <TextField
                id="Address"
                disabled={Personaldisabled}
                onChange={(event) =>
                  event.target.value === ""
                    ? buttonDisabledset(true)
                    : buttonDisabledset(false)
                }
                error={buttonDisabled}
                label="Address"
                defaultValue="Wz- 1247C Nangal Raya"
                required
              />
              <TextField
                id="city"
                disabled={Personaldisabled}
                onChange={(event) =>
                  event.target.value === ""
                    ? buttonDisabledset(true)
                    : buttonDisabledset(false)
                }
                error={buttonDisabled}
                label="City"
                defaultValue="South-West Delhi"
                required
              />
              <br />
              <TextField
                id="State"
                disabled={Personaldisabled}
                onChange={(event) =>
                  event.target.value === ""
                    ? buttonDisabledset(true)
                    : buttonDisabledset(false)
                }
                error={buttonDisabled}
                label="State"
                defaultValue="New Delhi"
                required
              />
              <TextField
                id="pin"
                disabled={Personaldisabled}
                onChange={(event) =>
                  event.target.value === ""
                    ? buttonDisabledset(true)
                    : buttonDisabledset(false)
                }
                error={buttonDisabled}
                label="PIN"
                defaultValue="110046"
                required
              />
              <br />
              <TextField
                id="Country"
                disabled={Personaldisabled}
                onChange={(event) =>
                  event.target.value === ""
                    ? buttonDisabledset(true)
                    : buttonDisabledset(false)
                }
                error={buttonDisabled}
                label="Country"
                defaultValue="India"
                required
              /> */}
            </form>

            <Button
              disabled={buttonDisabled}
              variant="contained"
              color="secondary"
              onClick={() =>
                Personalvalue === 1
                  ? (Personaldisabledset(true), Personalvalueset(0))
                  : (Personaldisabledset(false), Personalvalueset(1))
              }
            >
              {Personalvalue === 1 ? "Save" : "Edit"}
            </Button>
            <h6 hidden={Personaldisabled}>
              Don't forget to{" "}
              <a style={{ color: "RED" }} href={href}>
                save
              </a>{" "}
              before procedding to next Step.{" "}
              <a style={{ color: "RED" }} href={href}>
                *
              </a>
            </h6>
          </>
        );
      case 1:
        return "An ad group contains one or more ads which target a shared set of keywords.";
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return "Unknown step";
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
