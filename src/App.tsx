import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

function App() {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CssBaseline enableColorScheme>
      <Typography variant="h1">Hello world</Typography>

      <Typography>You've clicked the button {count} times</Typography>

      <Button onClick={onClick} variant="contained" color="success">
        Click me
      </Button>
    </CssBaseline>
  );
}

export default App;
