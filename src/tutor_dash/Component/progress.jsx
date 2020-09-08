import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function LinearBuffer() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      const diff = Math.random() * 30;
      const diff2 = Math.random() * 30;
      setProgress(progress + diff);
      setBuffer(progress + diff + diff2);
    };
  });

  React.useEffect(() => {
    setInterval(() => {
      progressRef.current();
    }, 100);
  }, []);

  return (
    <LinearProgress
      variant="buffer"
      color="secondary"
      value={progress}
      valueBuffer={buffer}
    />
  );
}
